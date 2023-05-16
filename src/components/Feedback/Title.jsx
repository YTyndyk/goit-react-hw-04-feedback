import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Title = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
