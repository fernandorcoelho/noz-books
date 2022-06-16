import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  isButton?: React.ReactNode;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, isButton, ...rest },
  ref
) => {
  return (
    <S.Container>
      <div>
        {!!label && <label htmlFor={name}>{label}</label>}
        <input name={name} id={name} ref={ref} {...rest} />
      </div>
      {isButton}
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
