import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signin from './pages/Signin';
import User from './pages/User';
import Transactions from './pages/Transactions';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
        <Footer />
      
    </BrowserRouter>
  </Provider>
);
