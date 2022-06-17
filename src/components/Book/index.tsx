import { IBook } from 'types/books';

import * as S from './styles';

interface IBookProps {
  item: IBook;
}

export const Book = ({ item }: IBookProps) => {
  return (
    <>
      <S.Container>
        <S.ImgBook>
          <img src={item.imageUrl} alt={item.title} />
        </S.ImgBook>

        <div>
          <h1>{item.title}</h1>
          <h2>{item.authors}</h2>
          <div>
            <h3>Informações</h3>
            <ul>
              <li>
                Páginas <div>{item.pageCount} páginas</div>
              </li>
              <li>
                Editora <div>{item.publisher}</div>
              </li>
              <li>
                Publicação <div>{item.published}</div>
              </li>
              <li>
                Idioma <div>{item.language}</div>
              </li>
              <li>
                Título Original <div>{item.title}</div>
              </li>
              <li>
                ISBN-10 <div>{item.isbn10}</div>
              </li>
              <li>
                ISBN-30 <div>{item.isbn13}</div>
              </li>
            </ul>
          </div>

          <article>
            <h4>Resenha da Editora</h4>
            <p>
              <S.QuotesLeft />
              {item.description}
            </p>
          </article>
        </div>
      </S.Container>
    </>
  );
};
