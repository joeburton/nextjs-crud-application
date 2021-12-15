import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

test('it should render a test component with the correct props', () => {
  const { getByTestId } = render(
    <TestComponent name='Joe Burton' dob='04/10/1979' gender='male' />
  );
  const details = getByTestId('personal-details');

  expect(details).toHaveTextContent(/^Joe Burton, 04\/10\/1979, male$/);
  expect(details).toBeInTheDocument();
});
