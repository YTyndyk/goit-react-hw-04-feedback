import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={css.btnWrapper}>
    {options.map(option => {
      return (
        <div key={option}>
          <button
            type="button"
            className={css.btn}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </div>
      );
    })}
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
