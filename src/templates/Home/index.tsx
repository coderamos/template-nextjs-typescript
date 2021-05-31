import BaseTemplate from 'templates/Base';

import { Container } from 'components/Container';
import Heading from 'components/Heading';

import * as s from './styles';

const Home = () => (
  <BaseTemplate>
    <Container>
      <s.Wrapper>
        <Heading>boilerplate-nextjs-typescript/</Heading>
      </s.Wrapper>
    </Container>
  </BaseTemplate>
);

export default Home;
