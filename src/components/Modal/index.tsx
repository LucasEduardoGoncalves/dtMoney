import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm, SubmitHandler } from "react-hook-form";
import { FiAlertCircle } from 'react-icons/fi'

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Tooltip } from '../Tooltip';
import { LoadingIcon } from '../LoadingIcon';

import { firestore } from '../../services/firebase';
import { useAuth } from '../../hooks/auth';

import { Container, TypeContainer, RadioBox, Input } from './styles';
interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
}

type Inputs = {
  title: string,
  value: string,
  category: string,
  data: Date,
  type: 'deposit' | 'withdraw',
};

export const ModalTransition: React.FC<Props> = ({isOpen, handleCloseModal}) => {

  const [type, setType] = useState(''); // deposit || withdraw
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    setLoading(true);

    if (user) {
      firestore.collection(user.id).add({
        title: data.title,
        value: data.value,
        category: data.category,
        data: new Date(),
        type: type,
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
          setLoading(false);
      });
    }

    handleCloseModal();
    setLoading(false);
  };

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
      
      <Container onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastrar transação</h2>

          <Input>
            <input
              placeholder="Titulo"
              {...register("title", { required: true })}
            />
            {errors.title && <Tooltip title="Este campo é obrigatorio"><FiAlertCircle /></Tooltip>}
          </Input>

          <Input>
            <input
              type="number"
              placeholder="Valor"
              {...register("value", { required: true })}
            />  
            {errors.value && <Tooltip title="Este campo é obrigatorio"><FiAlertCircle /></Tooltip>}
          </Input>

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

          <Input>
            <input
              placeholder="Categoria"
              {...register("category", { required: true })}
            />
            {errors.category && <Tooltip title="Este campo é obrigatorio"><FiAlertCircle /></Tooltip>}
          </Input>

          <button type="submit">
            {loading ? <LoadingIcon /> : 'Cadastrar'}
          </button>
      </Container>
    </Modal>  
  );
};