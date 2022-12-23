import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

function Button({ children, ...rest }) {
  return (
    <StyledButton type="button" {...rest}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.array,
};

export default Button;
