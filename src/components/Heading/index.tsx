import * as s from './styles';

type ColorTypes = 'primary' | 'secondary' | 'white' | 'alternative';

export type HeadingProps = {
  children: React.ReactNode;
  color?: ColorTypes;
};

const Heading = ({ children, color = 'secondary' }: HeadingProps) => (
  <s.Wrapper color={color}>{children}</s.Wrapper>
);

export default Heading;
