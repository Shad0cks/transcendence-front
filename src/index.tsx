import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Header';
import MainUserProfile from './Pages/UserProfile/MainUserProfile';
import NotFound from './Pages/NotFound';
import MainGame from './Pages/GamePage/MainGame';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/user_profile' element={<MainUserProfile/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/game_:id' element={<MainGame/>}/>
    </Routes>
  </BrowserRouter>
);