import React, { useEffect, useState } from 'react';
import ProfileImg from '../../assets/total.svg';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { Header } from '../../components/Header';

import { Container, InfoProfile, HistoricTransactionTitle, HistoricTransaction } from './styles';

interface historicItensProps {
    title: string,
    QuantidadeTransactions: string,
    EndedAt: string,
    Saldo: string,
    ValorFinal: string
}

export const Profile: React.FC = () => {

    const { user } = useAuth();
    const [historicItens, setHistoricItens] = useState<historicItensProps[]>([]);

    useEffect(() => {
        api.get('transactionsClosed').then(response => setHistoricItens(response.data));
    },[])

    return (
    <>
        <Header />
        <Container>
            <InfoProfile>
                <img src={ProfileImg} alt="" />

                <div>
                    <h2>{user.name}</h2>
                    <span>{user.email}</span>
                </div>
            </InfoProfile>   

            <HistoricTransactionTitle>
                Histórico de transações           
            </HistoricTransactionTitle>      

            <HistoricTransaction>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Quantidade de transações</th>
                        <th>Data de fechamento</th>
                        <th>Saldo</th>
                        <th>Valor final</th>
                    </tr>
                </thead>

                <tbody>
                    {historicItens.map(iten =>                     
                        <tr>
                            <td>{iten.title}</td>
                            <td>{iten.QuantidadeTransactions}</td>
                            <td>{iten.EndedAt}</td>
                            <td>{iten.Saldo}</td>
                            <td>{iten.ValorFinal}</td>
                        </tr>
                    )}
                </tbody>
            </HistoricTransaction>
        </Container>
    </>
  );
}