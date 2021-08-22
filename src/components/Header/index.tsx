import React from 'react';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import { ContainerHeader, Content, Button } from './styles';
interface Props {
  onOpenModal?: () => void;
}

export const Header: React.FC<Props> = ({onOpenModal}) => {

  const { signOut } = useAuth();

  return (
      <ContainerHeader>
          <Content>
            <img src={logoImg} alt="dt money"/> 

      
            <div>
              <Button type="button" onClick={onOpenModal}>
                  Nova Transação
              </Button>    
              <Button type="button" onClick={signOut}>
                SignOut
              </Button>  
            </div>          
          </Content>      
    </ContainerHeader>
  );
};