import React from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, AreaSummary } from './styles';

import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


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

  return (
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
  );
}