import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${() => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  `}
`;
