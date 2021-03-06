import { useCallback, useEffect, useRef } from 'react';

import { Book } from 'components/Book';
import { AnimatePresence } from 'framer-motion';
import { IBook } from 'types/books';

import * as S from './styles';

interface IModalProps {
  showModal: boolean;
  selectedItem: IBook;
  toggleModal: () => void;
}

export const Modal = ({
  showModal,
  selectedItem,
  toggleModal
}: IModalProps) => {
  const modalRef = useRef();

  // Fecha o modal
  const closeModal = (e) => {
    if (modalRef === e.target) {
      toggleModal();
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <S.Background onClick={closeModal} ref={modalRef}>
          <S.ModalWrapper>
            <Book item={selectedItem} />
            <S.CloseModalButton
              aria-label="Fechar Modal"
              onClick={toggleModal}
            />
          </S.ModalWrapper>
        </S.Background>
      )}
    </AnimatePresence>
  );
};
