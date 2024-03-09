import css from './Profile.module.css';
import PropTypes from 'prop-types';
import { object } from 'prop-types';
const Profile = ({
  name,
  tag,
  image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.statsdata}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.statsdata}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.statsdata}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
