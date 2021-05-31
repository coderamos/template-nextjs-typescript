import { Container } from 'components/Container';

import * as s from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <s.Wrapper>
    <Container>{/* <Menu /> */}</Container>
    <s.Content>{children}</s.Content>
    <s.SectionFooter>
      <Container>{/* <Footer /> */}</Container>
    </s.SectionFooter>
  </s.Wrapper>
);

export default BaseTemplate;
