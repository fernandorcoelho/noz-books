import { IBook } from 'types/books';

import * as S from './styles';

interface IBookCardProps {
  item: IBook;
  onClick: () => void;
}

export const BookCard = ({ item, onClick }: IBookCardProps) => {
  return (
    <>
      <S.Container onClick={onClick} layoutId={item.id}>
        <img className="img" src={item.imageUrl} alt={item.title} />

        <div>
          <h2>{item.title}</h2>
          <h3>{item.authors}</h3>
          <p>
            {item.pageCount} páginas <br /> {item.publisher} <br />
            Publicado em {item.published}
          </p>
        </div>
      </S.Container>
    </>
  );
};
