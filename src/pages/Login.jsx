// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <h4>Log into your account</h4>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;