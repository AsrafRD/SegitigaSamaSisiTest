import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import UserPage from './pages/user';
import AdminPage from './pages/admin';
import VerifikatorPage from './pages/verifikator';
import CreatePermittionPage from './pages/permittions/permittionCreate';
import EditPermittionPage from './pages/permittions/permittionEdit';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/verificator" element={<VerifikatorPage />} />
        <Route path="/permittion/create" element={<CreatePermittionPage />} />
        <Route path="/permittion/edit/:id" element={<EditPermittionPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
