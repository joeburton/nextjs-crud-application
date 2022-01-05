import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

test('it should render a test component with the correct props', () => {
  const { getByTestId } = render(
    <TestComponent name='Force build' dob='04/10/1979' gender='male' />
  );
  const details = getByTestId('personal-details');

  expect(details).toHaveTextContent(/^Force build, 04\/10\/1979, male$/);
  expect(details).toBeInTheDocument();
});

test('it should render a test component with the correct props', () => {
  const { getByTestId } = render(
    <TestComponent name='Test Component' dob='04/10/1979' gender='male' />
  );
  const details = getByTestId('personal-details');

  expect(details).toHaveTextContent(/^Test Component, 04\/10\/1979, male$/);
  expect(details).toBeInTheDocument();
});
