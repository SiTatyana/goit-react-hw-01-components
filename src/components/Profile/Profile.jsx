import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({avatar, username, tag, location, stats}) =>{
 return (
 <div className={css.container}>
    <div className={css.profile}>
        <img className={css.avatar} src={avatar} alt="avatar"/>
        <h1 className={css.username}>{username}</h1>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
    </div>
        <ul className={css.stats}>
            <li className={css.followers}>
                <span className={css.info}>Followers</span>
                <span className={css.count}>{stats.followers}</span>
            </li>
            <li className={css.views}>
                <span className={css.info}>Views</span>
                <span className={css.count}>{stats.views}</span>
            </li>
            <li className={css.likes}>
                <span className={css.info}>Likes</span>
                <span className={css.count}>{stats.likes}</span>
            </li>
        </ul>
 </div>
 )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats:  PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    }),
}