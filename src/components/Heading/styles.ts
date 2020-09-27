import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
