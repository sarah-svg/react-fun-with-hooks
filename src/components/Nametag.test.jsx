import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';

import user from '@testing-library/user-event';


import Nametag from './Nametag';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Nametag />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('testing the user input', async () => {
    render(<Nametag />);
    const input = screen.getByPlaceholderText('Enter your name');
    user.type(input, 'John');
    const color = screen.getByTestId('color');
    user.hover(color, 'blue');

    return  waitFor(async () => {
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(color).toHaveStyle('background-color: blue');
    });
  }); 
});
