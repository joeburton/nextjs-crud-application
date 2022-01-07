import { ApolloProvider } from '@apollo/client';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import apolloClient from '../../lib/apollo/apolloClient';
import { DeveloperListItem, DeveloperList } from '../';

let developer;

beforeEach(() => {
  developer = {
    id: '234234-2342-234',
    name: 'Jim Bob',
    skills: 'Juggling',
  };
});

describe('DeveloperListItem', () => {
  it('should render the DeveloperListItem Component', async () => {
    const { getByTestId } = render(
      <ApolloProvider client={apolloClient}>
        <DeveloperListItem {...developer} />
      </ApolloProvider>
    );
    await waitFor(() =>
      expect(getByTestId('developer-list-item')).toBeInTheDocument()
    );

    expect(getByTestId('developer-list-item')).toHaveTextContent('Jim Bob');
  });

  it('should display the EditDeveloper component when requested', () => {
    const { getByTestId } = render(
      <ApolloProvider client={apolloClient}>
        <DeveloperListItem {...developer}></DeveloperListItem>
      </ApolloProvider>
    );
    const editDeveloperBtn = getByTestId('edit-developer-btn');

    userEvent.click(editDeveloperBtn);

    expect(getByTestId('edit-developer')).toBeInTheDocument();
  });

  it('should delete the list item when clicking the delete button', async () => {
    const { getAllByTestId, findByTestId, getAllByRole } = render(
      <ApolloProvider client={apolloClient}>
        <DeveloperList />
      </ApolloProvider>
    );

    await findByTestId('developer-list');

    expect(getAllByTestId('developer-details')).toHaveLength(2);

    const deleteBtn = getAllByRole('button', { name: /Delete/i });

    userEvent.click(deleteBtn[1]);

    await waitFor(() =>
      expect(getAllByTestId('developer-details')).toHaveLength(1)
    );
  });
});
