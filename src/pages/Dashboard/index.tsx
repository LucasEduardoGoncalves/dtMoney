import React, { useState } from 'react';

import { Container, AreaSummary } from './styles';

import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Header } from '../../components/Header';
import { ModalTransition } from '../../components/Modal';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

export const Dashboard: React.FC = () => {

  const { user } = useAuth();

  const history = useHistory();

  if(!user) {history.push('/')}

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenModal}/>
      <ModalTransition isOpen={isOpen} handleCloseModal={handleCloseModal} />
      <Container>    
          <AreaSummary>
            <Summary 
              title="Entradas" 
              img={incomeImg} 
              value={
                new Intl.NumberFormat('pt-BR', 
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(0)}
            />

            <Summary 
              title="Saidas" 
              img={outcomeImg} 
              value={ '-' +
                new Intl.NumberFormat('pt-BR', 
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(0)
                }
            />

            <Summary 
              title="Total" 
              img={totalImg} 
              value={
                new Intl.NumberFormat('pt-BR', 
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(0)} 
              total
            />   
          </AreaSummary> 
          <TransactionsTable />
      </Container>
    </>
  );
}