import PropTypes from 'prop-types';
import Title from './Title';
export const Section = ({ title, children }) => {
  return (
    <section>
      <Title title={title} />
      {children}
    </section>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
export default Section;
