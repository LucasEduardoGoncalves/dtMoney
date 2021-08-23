import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Header } from '../../components/Header';

import { Container, InfoProfile, Button } from './styles';
import { useHistory } from 'react-router-dom';


export const Profile: React.FC = () => {

    const { user , signOut } = useAuth();
    const history = useHistory();

    if(!user){history.push('/')};

    return (
    <>
        <Header />
        <Container>
            <InfoProfile>
                <img src={user?.avatar} alt="" />

                <div>
                    <h2>{user?.name}</h2>
                    <Button type="button" onClick={signOut}>
                        SignOut
                    </Button>  
                </div>
            </InfoProfile>   

            {/* <HistoricTransactionTitle>
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

                </tbody>
            </HistoricTransaction> */}
        </Container>
    </>
)};