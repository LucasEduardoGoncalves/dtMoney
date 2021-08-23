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
import { useCollection } from '@nandorojo/swr-firestore';

interface DataProps {
  category: string,
  data: {
      seconds: number, 
      nanoseconds: number
  }
  id: string,
  title: string,
  type: string,
  value: string,
}

export const Dashboard: React.FC = () => {

  const { user } = useAuth();

  const history = useHistory();

  const { data } = useCollection<DataProps>(user ? user.id : 'users', {listen: true}); 

  if(!user) {history.push('/')}

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const summary = data?.reduce((acc, transaction) => {
    if (transaction.type === 'deposit'){
      acc.deposits += Number(transaction.value);
      acc.total += Number(transaction.value);
    } else {
      acc.withdraws += Number(transaction.value);
      acc.total -= Number(transaction.value);
    }
    return acc;
    },{
      deposits: 0,
      withdraws: 0,
      total: 0 
    }
  )

  return (
    <>
      <Header onOpenModal={handleOpenModal}/>
      <ModalTransition isOpen={isOpen} handleCloseModal={handleCloseModal} />
      <Container>    
          <AreaSummary>
          {summary &&
          <>
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
          </>
          }
          </AreaSummary> 
          <TransactionsTable />
      </Container>
    </>
  );
}