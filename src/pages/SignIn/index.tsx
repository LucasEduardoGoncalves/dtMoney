import React from 'react';

import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

import { AiOutlineGoogle } from 'react-icons/ai';

import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

export const SignIn: React.FC = () => {

  const { signInWithGoogle, user } = useAuth();

  const history = useHistory();

  if(user){history.push('/home')}

  async function loginGoogle() {
    if(!user){
      await signInWithGoogle();
    };
    history.push('/home');
  };

  // async function loginGithub() {
  //   if(!user){
  //     await signInWithGitHub();
  //   };
  //   history.push('/home');
  // };

  return (

  <Container>
    <Content>
        <img src={LogoImg} alt="Logo" />
        <div>
          <button className="google" onClick={loginGoogle}>
            <AiOutlineGoogle />
            Google
          </button>

          {/* <button className="github" onClick={loginGithub}>
            <AiFillGithub />
            GitHub
          </button> */}
        </div>
    </Content>
  </Container>
);
}
