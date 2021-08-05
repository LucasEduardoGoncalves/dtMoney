import React from 'react';

import { Container, AreaSummary } from './styles';

import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Dashboard: React.FC = () => {
  return (
    <Container>   
        <AreaSummary>
          <Summary title="Entradas" img={incomeImg} value=" R$12000,00"/>
          <Summary title="Saidas" img={outcomeImg} value="- R$1000,00"/>
          <Summary title="Total" img={totalImg} value="R$1100,00" total/>   
        </AreaSummary> 

        <TransactionsTable />
    </Container>
  );
}