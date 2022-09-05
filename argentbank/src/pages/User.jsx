// React
import React from 'react';

import BankAccount from '../components/BankAccount';
import ACCOUNT_DATAS from '../datas/account-datas';

function User() {
  return (
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
  );
}

export default User;