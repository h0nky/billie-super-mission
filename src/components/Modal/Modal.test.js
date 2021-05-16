/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

test('modal render children and a close button', () => {
  const onHandleClose = jest.fn();
  const event = new KeyboardEvent('keydown', { keyCode: 27 });
  const { getByText } = render(<Modal onClose={onHandleClose}><div>children</div></Modal>);

  expect(getByText('children')).toBeTruthy();

  document.dispatchEvent(event);

  expect(onHandleClose).toHaveBeenCalledTimes(1);
});
