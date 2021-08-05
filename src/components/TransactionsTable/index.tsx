import React, { useEffect } from 'react';
import { api } from '../../services/api';

import { Container, Table } from './styles';

export const TransactionsTable: React.FC = () => {
    
    useEffect(() => {
        api.get('transactions').then(response => console.log(response.data));
    },[])

  return (
    <Container>
        <Table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Desenvolvimento de WebSite</td>
                    <td className='deposite'>R$12000.00</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className='whithdraw'>- R$1000.00</td>
                    <td>Casa</td>
                    <td>17/02/2021</td>
                </tr>          
            </tbody>
        </Table>
    </Container>
  );
};