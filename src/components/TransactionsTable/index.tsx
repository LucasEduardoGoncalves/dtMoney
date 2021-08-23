import React from 'react';

import { format } from 'date-fns'
import { useCollection } from '@nandorojo/swr-firestore'
import { AiFillDelete } from 'react-icons/ai';

import { firestore } from '../../services/firebase';
import { useAuth } from '../../hooks/auth';

import { Container, Table } from './styles';
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

export const TransactionsTable: React.FC = () => {

    const { user } = useAuth();

    const { data } = useCollection<DataProps>(user ? user.id : 'users', {listen: true}); 

    function deleteDoc(id: string) {
        firestore.collection(user ? user.id : 'users').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {data?.map(list => 
                        <tr key={list.id}>
                            <td>{list.title}</td>
                            <td className={list.type}>{
                                new Intl.NumberFormat('pt-BR', 
                                    {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(Number(list.value))}
                            </td>
                            <td>{list.category}</td>
                            <td>{format(new Date(Number(list.data.seconds * 1e3)), "MM/dd/yyyy")}</td>
                            <td className='button'>
                                <button onClick={() => deleteDoc(list.id)}><AiFillDelete /></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};