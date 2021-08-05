import React from 'react';

import { Container } from './styles';

type Props = {
  title: string;
  img: string;
  value: string;
  total?: boolean;
}

export const Summary: React.FC<Props> = ({title, img, value, total = false}) => {
  return (
      <Container total={total}>
          <header>
            <h2>{title}</h2>
            <img src={img} alt="icon"/>
          </header>

          <strong>{value}</strong>
      </Container>
  );
};