// React
import React from 'react';
import { Link } from 'react-router-dom';


function BankAccount(props) {
  return (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{props.accountTitle}</h3>
            <p className="account-amount">{props.accountAmount}</p>
            <p className="account-amount-description">{props.accountAmountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to={props.linkPath} className="account-button-link">
            <button className="transaction-button">View transactions</button>
          </Link>
        </div>
    </section>
  );
}

export default BankAccount;