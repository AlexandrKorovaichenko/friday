import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Components } from '../../../n2-features/f0-test/Component';
import { LoginPage } from '../../../n2-features/f1-auth/a1-login/1-LoginPage';
import { RegPage } from '../../../n2-features/f1-auth/a2-reg/1-RegPage';
import { RecoverPasswordPage } from '../../../n2-features/f1-auth/a3-recoverPassword/1-RecoverPasswordPage';
import { AddNewPasswordPage } from '../../../n2-features/f1-auth/a4-addNewPassword/1-AddNewPasswordPage';

export const RoutesList = () => {

  return (
    <Routes>
      <Route path={'login'} element={<LoginPage />} />
      <Route path={'reg'} element={<RegPage />} />
      <Route path={'recoverPas'} element={<RecoverPasswordPage />} />
      <Route path={'newPas'} element={<AddNewPasswordPage />} />
      <Route path={'components'} element={<Components />} />
      <Route path = {'404'} element={<h1>404: PAGE NOT FOUND</h1>} />
    </Routes> 
  );
}

export default RoutesList