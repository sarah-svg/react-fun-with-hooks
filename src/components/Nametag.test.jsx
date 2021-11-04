import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Nametag from './Nametag';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Nametag />);
    expect(asFragment()).toMatchSnapshot();
  });
});
