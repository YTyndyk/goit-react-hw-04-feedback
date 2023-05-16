import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good / this.countTotalFeedback(this.state)) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.profile}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.leaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback(this.state)}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </div>
    );
  }
}
Feedback.propTypes = {
  good: PropTypes.number,
  neurtral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};
export default Feedback;
