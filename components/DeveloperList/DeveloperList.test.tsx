import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';

import apolloClient from '../../lib/apollo/apollo';
import { DeveloperList } from '../';

describe('DeveloperList', () => {
  it('should render the DeveloperList Component', async () => {
    const { getAllByTestId, getByTestId, findByTestId } = render(
      <ApolloProvider client={apolloClient}>
        <DeveloperList />
      </ApolloProvider>
    );
    await findByTestId('developer-list');

    const listItems = getAllByTestId('developer-list-item');
    expect(listItems[0]).toHaveTextContent('Joe Burton');

    expect(listItems).toHaveLength(2);
  });
});
