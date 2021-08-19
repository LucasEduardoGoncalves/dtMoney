import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface transactionsProps {
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,
    id: string,
};

type CreateTransactionsProps = Omit<transactionsProps, 'id'>

// type CreateTransactionsProps = Pick<transactionsProps, 'title' | 'amount' | 'type' | 'category' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode,
};

interface TransactionsContextData {
    transactions: transactionsProps[],
    createTransaction: (transaction: CreateTransactionsProps) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<transactionsProps[]>([]);
    
    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data));
    },[])

    async function createTransaction(transactionData: CreateTransactionsProps) {
        await api.post('/transactions', transactionData);
        await api.get('transactions').then(response => setTransactions(response.data));
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions () {
    const context = useContext(TransactionsContext);
    return context;
}       