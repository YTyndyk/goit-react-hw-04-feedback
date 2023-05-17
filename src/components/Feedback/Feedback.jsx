import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = e => {
    //console.log(e); // good
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);
  return (
    <div className={css.profile}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={leaveFeedback}
          options={Object.keys({ good, neutral, bad })}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback()}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
Feedback.propTypes = {
  good: PropTypes.number,
  neurtral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};

export default Feedback;
