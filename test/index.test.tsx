import React from 'react';
import { render } from '@testing-library/react';

import Pdf from '../src';

describe('Pdf', () => {
  it('renders without crashing', () => {
    const { container } = render(<Pdf file="basic.pdf" />);

    expect(container).toBeDefined();
  });
});
