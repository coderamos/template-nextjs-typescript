import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.white};
    }
  `}
`;
