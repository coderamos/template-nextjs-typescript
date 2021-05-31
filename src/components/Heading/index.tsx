import { ColorStyleProps } from 'types/globals';

import * as s from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: ColorStyleProps;
};

const Heading = ({ children, color = 'white' }: HeadingProps) => (
  <s.Wrapper color={color}>{children}</s.Wrapper>
);

export default Heading;
