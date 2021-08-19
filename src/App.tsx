import Modal from 'react-modal';
import { TransactionProvider } from './hooks/useTransictions';

import { Routes } from './Routes';

import { GlobalStyles } from "./styles/GlobalStyles";

Modal.setAppElement('#root');

export function App() {
  return (
    <TransactionProvider>
      <Routes/>     
      <GlobalStyles/>
    </TransactionProvider>
  );
};