import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { ContainerHeader, Content, Button } from './styles';
interface Props {
  onOpenModal?: () => void;
}

export const Header: React.FC<Props> = ({onOpenModal}) => {

  const history = useHistory();
  const location = useLocation();

  return (
      <ContainerHeader>
          <Content>
            <img src={logoImg} alt="dt money"/> 

      
            <div>
              {location.pathname !== '/profile' && 
                <Button type="button" onClick={onOpenModal}>
                    Nova Transação
                </Button> 
              }
                 
              {location.pathname === '/profile' ? 
                <Button type="button" onClick={() => history.push('/home')}>
                  Home
                </Button>  
              :
                <Button type="button" onClick={() => history.push('/profile')}>
                  Profile
                </Button>  
              }            
            </div>          
          </Content>      
    </ContainerHeader>
  );
};