import * as s from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'white' | 'black';
};

const Heading = ({ children, color = 'white' }: HeadingProps) => (
  <s.Container color={color}>{children}</s.Container>
);

export default Heading;
