import React from 'react';
import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import closeImg from '../../assets/close.svg';

import { Container, TypeContainer, RadioBox } from './styles';
import { useState } from 'react';

interface Props {
    isOpen: boolean;
    handleCloseModal: () => void;
}

export const ModalTransition: React.FC<Props> = ({isOpen, handleCloseModal}) => {

  const [type, setType] = useState(''); // deposit || withdraw

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
      <button type="button" onClick={handleCloseModal} className="react-modal-close">
        <img src={closeImg} alt="CLose Modal" />
      </button>
      
      <Container>
          <h2>Cadastrar transação</h2>

          <input
            placeholder="Titulo"
          />

          <input
            type="number"
            placeholder="Valor"
          />  

          <TypeContainer>
            <RadioBox
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TypeContainer>

          <input
            placeholder="Categoria"
          />

          <button type="submit">
            Cadastrar
          </button>
      </Container>
    </Modal>  
  );
}