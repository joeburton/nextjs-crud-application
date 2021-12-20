import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import apolloClient from '../../lib/apollo/apollo';
import { DeveloperList } from '../';

describe('DeveloperList', () => {
  it('should render the DeveloperList Component', async () => {
    const { getAllByTestId, getByTestId } = render(
      <ApolloProvider client={apolloClient}>
        <DeveloperList />
      </ApolloProvider>
    );

    await waitFor(() =>
      expect(getByTestId('developer-list')).toBeInTheDocument()
    );

    const listItems = getAllByTestId('developer-list-item');
    expect(listItems[0]).toHaveTextContent('Joe Burton');

    expect(listItems).toHaveLength(2);
  });
});
