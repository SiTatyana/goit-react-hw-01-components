import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({title='Upload stats', stats}) => {
return (  
<section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.statList}>
        {stats.map (item => (
            <li style={{backgroundColor:  getRandomHexColor()}} className={css.item} key={item.id}>
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}%</span> 
            </li>))}
    </ul>
</section>
)}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}