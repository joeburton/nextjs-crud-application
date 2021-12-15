import { render } from '@testing-library/react';
import AddDeveloper from './AddDeveloper';

test('renders deploy link', () => {
  const { getByText } = render(<AddDeveloper />);
  const linkElement = getByText(
    /Instantly deploy your Next\.js site to a public URL with Vercel\./
  );
  expect(linkElement).toBeInTheDocument();
});
