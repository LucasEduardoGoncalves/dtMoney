import React, { useState } from 'react';
import { useTransactions } from '../../hooks/useTransictions';

import { Container, AreaSummary } from './styles';

import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Header } from '../../components/Header';
import { ModalTransition } from '../../components/Modal';

export const Dashboard: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;

    },{
      deposits: 0,
      withdraws: 0,
      total: 0 
    }
  )

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
                  }).format(summary.deposits)}
            />

            <Summary 
              title="Saidas" 
              img={outcomeImg} 
              value={ '-' +
                new Intl.NumberFormat('pt-BR', 
                  {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(summary.withdraws)
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
                  }).format(summary.total)} 
              total
            />   
          </AreaSummary> 
          <TransactionsTable />
      </Container>
    </>
  );
}