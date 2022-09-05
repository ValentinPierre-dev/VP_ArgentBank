// React
import React from 'react';

function TransactionsHeader(props) {
  return (
    <section className="transHeader">
      <div className="transHeader-content">
        <h3 className="transHeader-title">{props.title}</h3>
        <p className="transHeader-amount">{props.amount}</p>
        <p className="transHeader-amount-description">{props.amountDescription}</p>
      </div>
    </section>
  );
}

export default TransactionsHeader;