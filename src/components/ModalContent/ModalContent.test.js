/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ModalContent, { ModalButton } from './ModalContent';

const setup = () => {
  const utils = render(
    <ModalContent />,
  );

  const input = utils.getByLabelText('input');
  const title = utils.getByLabelText('title');

  return { input, title };
};

test('check title render', () => {
  const { title } = setup();

  expect(title).toBeTruthy();
});

test('check input render and [onChange] call', () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: '100' } });

  expect(input.value).toBe('100');

  expect(input).toBeTruthy();
});

test('check button render and [onClick] call', () => {
  const onHandleClick = jest.fn();
  const { getByText } = render(
    <ModalButton onHandleSubmit={onHandleClick}>
      Update
    </ModalButton>,
  );

  fireEvent.click(getByText(/update/i));

  expect(onHandleClick).toHaveBeenCalledTimes(1);

  expect(getByText('Update')).toBeTruthy();
});
