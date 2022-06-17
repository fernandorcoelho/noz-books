import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { GetServerSideProps } from 'next';
import Image from 'next/image';
import router from 'next/router';

import { BookCard } from 'components/BookCard';
import { BookCardSkeleton } from 'components/BookCard/skeleton';
import MetaTags from 'components/MetaTags';
import { Modal } from 'components/Modal';
import { Pagination } from 'components/Pagination';
import { useIsFirstRender } from 'hooks/useFirstRender';
import { api, removeAuthentication, setupAPI } from 'services/client/api';
import * as S from 'styles/livros';
import { IBook, IBooksData } from 'types/books';
import { handleDestroyCookies } from 'utils/destroyCookie';
import { handleRecoverUserDataFromCookies } from 'utils/recoverUserDataFromCookie';

interface IBooksPageProps {
  books: IBook[];
  totalPages: number;
}

export default function BooksPage({
  books: initialData,
  totalPages: initialTotalPages
}: IBooksPageProps) {
  const userData = handleRecoverUserDataFromCookies();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState(initialData);
  const [totalPages, setTotalPages] = useState(initialTotalPages);

  const isFirst = useIsFirstRender();

  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBook>();

  // Faz a listagem dos livros no lado do browser/client
  const getBooks = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<IBooksData>('/books', {
        params: { page: page, amount: 12 }
      });

      setBooks(data.data);
      setTotalPages(Math.ceil(data.totalPages));
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Carrega os livros após a segunda renderização, a cada vez que a página muda
  useEffect(() => {
    if (!isFirst) {
      getBooks();
    }
  }, [page]);

  // Abre o modal com os dados do livro
  const handleOpenModal = (book: IBook) => {
    setShowModal(!showModal);
    setSelectedBook(book);
  };

  // Fecha o modal e remove os dados do livro dele
  const onRequestCloseModal = () => {
    setShowModal(false);
    setSelectedBook(undefined);
  };

  // Desabilita o scroll da página caso o modal esteja aberto
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [showModal]);

  const handleSignOut = async () => {
    try {
      await handleDestroyCookies('userData');
      await handleDestroyCookies('accessToken');
      await handleDestroyCookies('refreshToken');

      removeAuthentication();

      toast('🦄 Logout efetuado. Volte sempre :)', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      router.push('/');
    } catch (err) {
      toast.error('Erro ao efetuar logout!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <>
      <MetaTags
        title="Livros | Noz Books"
        description="Aqui você encontra inúmeros livros fantásticos!"
        image="/images/favicon.png"
        url="https://noz-books.vercel.app/"
        keywords="noz books desenvolvimento pessoal profissional livros listagem descrição"
      />

      <S.Container>
        <S.Header>
          <div>
            <Image
              width={105}
              height={36}
              src="/images/black-logo.svg"
              alt="Logo escura Noz Boooks"
            />
            <p>Books</p>
          </div>

          <div>
            <p>
              Bem-vindo(a) <strong>{userData?.name}</strong>!
            </p>
            <button
              type="button"
              aria-label="Deslogar"
              onClick={() => handleSignOut()}
            ></button>
          </div>
        </S.Header>

        <S.Section>
          <S.ItemsGrid>
            {isLoading
              ? Array(12)
                  .fill(0)
                  .map((_, index) => <BookCardSkeleton key={index} />)
              : books?.map((item) => (
                  <BookCard
                    key={item.id}
                    item={item}
                    onClick={() => handleOpenModal(item)}
                  />
                ))}
          </S.ItemsGrid>

          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </S.Section>
      </S.Container>

      <Modal
        showModal={showModal}
        toggleModal={onRequestCloseModal}
        selectedItem={selectedBook}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiServer = setupAPI(context);

  const { data } = await apiServer.get<IBooksData>('/books', {
    params: { page: 1, amount: 12 }
  });

  return {
    props: {
      books: data.data,
      totalPages: Math.ceil(data.totalPages)
    }
  };
};
