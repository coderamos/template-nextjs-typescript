import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps } from '.';

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
