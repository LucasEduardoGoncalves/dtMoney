import Modal from 'react-modal';
import { TransactionProvider } from './hooks/useTransactions';
import { AuthProvider } from './hooks/useAuth';

import { Routes } from './Routes';

import { GlobalStyles } from "./styles/GlobalStyles";

Modal.setAppElement('#root');

export function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <Routes/>     
        <GlobalStyles/>
      </TransactionProvider>
    </AuthProvider>
  );
};