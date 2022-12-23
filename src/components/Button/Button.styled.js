import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 226px;
  padding: 16px 47px;
  font-size: 20px;
  font-weight: 600;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  color: #373737;
  background-color: ${({ isFollow }) => (isFollow ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: none;
  cursor: pointer;

  transition: background-color 0.2s linear, box-shadow 0.2s linear;

  &:hover,
  &:focus {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
`;
