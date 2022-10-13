// React
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Pages
import Home from './pages/Home';
import Signin from './pages/Signin';
import User from './pages/User';
import Transactions from './pages/Transactions';
// Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
   const store = useSelector((state) => state);

   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route
               path="/user"
               element={
                  store.token ? (
                     <User />
                  ) : (
                     <Navigate to="/signin" replace />
                  )
               }
            />
            <Route
               path="/transactions"
               element={
                  store.token ? (
                     <Transactions />
                  ) : (
                     <Navigate to="/signin" replace />
                  )
               }
            />
         </Routes>
         <Footer />
      </>
   );
};

export default App;