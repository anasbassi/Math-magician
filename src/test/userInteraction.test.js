import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/calculator';

test('click', () => {
  render(<Calculator />);

  userEvent.click(screen.getByText('1'))
  expect(screen.getByLabelText('1')).toBe('1')
})