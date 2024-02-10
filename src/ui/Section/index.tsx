import { FC, HTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from '@ui';

export const Section: FC<HTMLAttributes<HTMLDivElement>> = observer((props) => {
  return (
    <section {...props}>
      <Container>{props.children}</Container>
    </section>
  );
});
