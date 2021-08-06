import Modal from 'react-modal';
import { TransactionProvider } from './hooks/useTransactions';

import { Header } from './components/Header';
import { ModalTransition } from './components/Modal';

import { Dashboard } from './pages/Dashboard';

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
    <TransactionProvider>
      <Header onOpenModal={handleOpenModal}/>
      <Dashboard/>

      <ModalTransition isOpen={isOpen} handleCloseModal={handleCloseModal} />
      <GlobalStyles/>
    </TransactionProvider>
  );
};