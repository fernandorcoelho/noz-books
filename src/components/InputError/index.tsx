import errors from 'utils/errors.json';

import * as S from './styles';

interface InputErrorProps {
  type: string;
  field: string;
}

export function InputError({ type, field }: InputErrorProps) {
  return (
    <S.Container>
      <span>{errors[field][type]}</span>
    </S.Container>
  );
}
