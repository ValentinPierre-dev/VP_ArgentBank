// React
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import BankAccount from '../components/BankAccount';
import ACCOUNT_DATAS from '../datas/account-datas';

function User() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Argent Bank - Welcome</title>
      </Helmet>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {ACCOUNT_DATAS.map((account) => (
            <BankAccount
              key={`${account.id}`}
              accountTitle={account.title}
              accountAmount={account.amount}
              accountAmountDescription={account.description}
            />
          ))}
      </main>
    </HelmetProvider>
  );
}

export default User;