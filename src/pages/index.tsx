import { Container } from 'components/Container';
import Heading from 'components/Heading';

import * as s from './styles';

export default function Home() {
  return (
    <Container>
      <s.Wrapper>
        <Heading color="white">boilerplate-nextjs-typescript/</Heading>
      </s.Wrapper>
    </Container>
  );
}
