import Modal from 'react-modal';
import { Routes } from './Routes';

import Fuego from './services/swr-firebase';

import { FuegoProvider } from '@nandorojo/swr-firestore'
import { GlobalStyles } from "./styles/GlobalStyles";
import { firebaseConfig } from './services/firebase';

Modal.setAppElement('#root');

export function App() {
  const fuego = new Fuego(firebaseConfig);

  return (
    <FuegoProvider fuego={fuego}>
      <Routes/>     
      <GlobalStyles/>
    </FuegoProvider>
  );
};