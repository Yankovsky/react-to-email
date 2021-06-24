import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: red;
  
  &:hover {
    color: green !important;
  }

  @media (max-width: 1200px) {
    color: pink !important;
    background: blue !important;
  }
`;
