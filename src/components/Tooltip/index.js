import React from 'react';

import { Container } from './styles.js';

export default function Tooltip({ description }) {
  return (
    <Container>
      <span>{description}</span>
    </Container>
  );
}
