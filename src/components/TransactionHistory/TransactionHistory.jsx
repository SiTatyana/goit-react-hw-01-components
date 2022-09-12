import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
return (
  <table className={css.transactionHistory}>
    <thead> 
        <tr clsassName={css.trhead}>
          <th className={css.headerItem}>Type</th>
          <th className={css.headerItem}>Amount</th>
          <th className={css.headerItem}>Currency</th>
        </tr>
  </thead>
  <tbody>
        {items.map (item => (
            <tr className={css.thList}>
            <th className={css.thItemtype}>{item.type}</th>
            <th className={css.thItem}>{item.amount}</th>
            <th className={css.thItem}>{item.currency}</th>
          </tr>
        ))}
  </tbody>
     
  </table>

)
}

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}