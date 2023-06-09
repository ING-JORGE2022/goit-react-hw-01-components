import css from "./TransactionHistory.module.css"
import PropTypes from 'prop-types';
import React from 'react';

export default function Transaction ({ items }) {
  return (
    <table className={css.transactionhistory}>
      <thead>
        <tr>
          <th className={css.line}>Type</th>
          <th className={css.line}>Amount</th>
          <th className={css.line}>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody className={css.row}>
          <tr key={item.id}>
            <td className={css.colum}>{item.type}</td>
            <td className={css.colum}>{item.amount}</td>
            <td className={css.colum}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
