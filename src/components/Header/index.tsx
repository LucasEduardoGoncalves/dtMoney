import React from 'react';

import logoImg from '../../assets/logo.svg';

import { ContainerHeader, Content, Button } from './styles';

interface Props {
  onOpenModal: () => void;
}

export const Header: React.FC<Props> = ({onOpenModal}) => {

  return (
      <ContainerHeader>
          <Content>
            <img src={logoImg} alt="dt money"/>      

            <Button type="button" onClick={onOpenModal}>
                Nova Transação
            </Button>
          </Content>      
     </ContainerHeader>
  );
};