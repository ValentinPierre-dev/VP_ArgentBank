// React
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Components
import TransactionsHeader from '../components/TransactionsHeader';
import TransactionsLine from '../components/TransactionsLine';

function Transactions() {
  return (
    <HelmetProvider>
        <Helmet>
        <title>Argent Bank - Transactions</title>
        </Helmet>
        <main className="main bg-dark">

            <TransactionsHeader
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                amountDescription="Available Balance"
            />

            <div className="transactionsLineHead">
                <div className="arrow"></div>
                <div className="transactionsLine-date">DATE</div>
                <div className="transactionsLine-descr">DESCRIPTION</div>
                <div className="transactionsLine-amount">AMOUNT</div>
                <div className="transactionsLine-balance">BALANCE</div>
            </div>

            <TransactionsLine
                date="June 20th, 2020"
                descr="Golden Sun Bakery"
                amount="$5.00"
                balance="$2082.79"
                transType="Electronic"
                category="Food"
            />
            <TransactionsLine
                date="June 20th, 2020"
                descr="Golden Sun Bakery"
                amount="$5.00"
                balance="$2082.79"
                transType="Electronic"
                category="Food"
            />
            <TransactionsLine
                date="June 20th, 2020"
                descr="Golden Sun Bakery"
                amount="$5.00"
                balance="$2082.79"
                transType="Electronic"
                category="Food"
            />
            <TransactionsLine
                date="June 20th, 2020"
                descr="Golden Sun Bakery"
                amount="$5.00"
                balance="$2082.79"
                transType="Electronic"
                category="Food"
            />
            <TransactionsLine
                date="June 20th, 2020"
                descr="Golden Sun Bakery"
                amount="$5.00"
                balance="$2082.79"
                transType="Electronic"
                category="Food"
            />
            <TransactionsLine
                date="June 20th, 2020"
                descr="Golden Sun Bakery"
                amount="$5.00"
                balance="$2082.79"
                transType="Electronic"
                category="Food"
            />
        </main>
    </HelmetProvider>
  );
}

export default Transactions;