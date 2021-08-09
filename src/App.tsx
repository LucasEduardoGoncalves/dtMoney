import Modal from 'react-modal';
import { TransactionProvider } from './hooks/useTransactions';
import { AuthProvider } from './hooks/useAuth';

import { Header } from './components/Header';
import { ModalTransition } from './components/Modal';

import { Routes } from './Routes/Routes';

import { GlobalStyles } from "./styles/GlobalStyles";

import { useState } from 'react';

Modal.setAppElement('#root');

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  
  return (
    <AuthProvider>
      <TransactionProvider>
        <Header onOpenModal={handleOpenModal}/>

        <Routes/>

        <ModalTransition isOpen={isOpen} handleCloseModal={handleCloseModal} />
        <GlobalStyles/>
      </TransactionProvider>
    </AuthProvider>
  );
};