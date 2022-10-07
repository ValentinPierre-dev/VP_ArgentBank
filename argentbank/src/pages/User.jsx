// React
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Components
import UserProfil from '../components/UserProfil';
import BankAccount from '../components/BankAccount';
import ACCOUNT_DATAS from '../datas/account-datas';

function User() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Argent Bank - Welcome</title>
      </Helmet>
      <main className="main bg-dark">
        <UserProfil />
        <h2 className="sr-only">Accounts</h2>
        {ACCOUNT_DATAS.map((account) => (
            <BankAccount
              key={`${account.id}`}
              linkPath={account.link}
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