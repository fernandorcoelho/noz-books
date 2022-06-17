import * as S from './styles';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <S.Container>
        <p>
          Página <strong>{page}</strong> de <strong>{totalPages}</strong>
        </p>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          <S.ArrowLeft />
        </button>
        <button
          className="next"
          disabled={page === totalPages}
          onClick={handleNextPage}
        >
          <S.ArrowRight />
        </button>
      </S.Container>
    </>
  );
};
