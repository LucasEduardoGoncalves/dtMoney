import React from 'react';

import { Container } from './styles';

export const LoadingIcon: React.FC = () => {
  return (  
    <Container>
        <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
            <circle className="point one" cx="45" cy="70" r="5" />
            <circle className="point two" cx="60" cy="70" r="5" />
            <circle className="point three" cx="75" cy="70" r="5" />
            </g>
        </svg>
    </Container>  
  );
}