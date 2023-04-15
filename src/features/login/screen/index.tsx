import React, { useState } from 'react';
import { LoginContent } from './ui';

export interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <>
      <LoginContent value={value} onChange={onChange} />
    </>
  );
};
