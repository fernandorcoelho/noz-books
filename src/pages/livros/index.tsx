import { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';

import { BookCard } from 'components/BookCard';
import { BookCardSkeleton } from 'components/BookCard/skeleton';
import { Header } from 'components/Header';
import MetaTags from 'components/MetaTags';
import { Modal } from 'components/Modal';
import { Pagination } from 'components/Pagination';
import { useIsFirstRender } from 'hooks/useFirstRender';
import { api, setupAPI } from 'services/client/api';
import * as S from 'styles/livros';
import { IBook, IBooksData } from 'types/books';

interface IBooksPageProps {
  books: IBook[];
  totalPages: number;
}

export default function BooksPage({
  books: initialData,
  totalPages: initialTotalPages
}: IBooksPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState(initialData);
  const [totalPages, setTotalPages] = useState(initialTotalPages);

  const isFirst = useIsFirstRender();

  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBook>();

  const loadBooks = async () => {
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
      loadBooks();
    }
  }, [page]);

  const handleOpenModal = (book: IBook) => {
    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    setShowModal(!showModal);
    setSelectedBook(book);
  };

  const onRequestCloseModal = () => {
    setShowModal(false);
    setSelectedBook(undefined);
  };

  return (
    <>
      <MetaTags
        title="Login | Noz Books"
        description="Bem-vindo(a) à Noz Books, o único lugar que você encontra os melhores livros para desenvolvimento pessoal e profissional."
        image="/images/favicon.png"
        url=""
        keywords="noz books desenvolvimento pessoal profissional livros listagem descrição"
      />

      <S.Container>
        <Header />

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
