import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
