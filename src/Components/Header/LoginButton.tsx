import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const LoginButton: React.FC = () => {
  return <Button>Login</Button>;
};

export default LoginButton;
