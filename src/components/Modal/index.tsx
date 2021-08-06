import React, { FormEvent } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions'; 

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

  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState(''); // deposit || withdraw
  const [category, setCategory] = useState('');


  async function handleCreateNewTransaction(event : FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,    
      type,
      category,
      amount: value,
      createdAt: String(new Date())
    })

    setTitle('');   
    setType('');
    setCategory('');
    setValue(0);

    handleCloseModal();
  }

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
      
      <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />

          <input
            type="number"
            placeholder="Valor"
            onChange={e => setValue(Number(e.target.value))}
            value={value}
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
            onChange={e => setCategory(e.target.value)}
            value={category}
          />

          <button type="submit">
            Cadastrar
          </button>
      </Container>
    </Modal>  
  );
}