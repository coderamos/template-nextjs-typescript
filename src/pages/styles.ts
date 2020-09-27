import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondary};
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  `}
`;
