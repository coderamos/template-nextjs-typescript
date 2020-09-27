import * as s from './styles';

export type HeadingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => (
  <s.Container>{children}</s.Container>
);

export default Heading;
