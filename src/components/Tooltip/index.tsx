import React from 'react';

import { ArrowTooltip } from 'assets/icons/Icons';

import * as S from './styles';

export const Tooltip = ({ text }: { text: string }) => {
  return (
    <S.Container>
      <ArrowTooltip />
      <p>{text}</p>
    </S.Container>
  );
};
