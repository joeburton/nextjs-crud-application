import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import apolloClient from '../../lib/apollo/apollo';
import { AddDeveloper, DeveloperList } from '../';

describe('AddDeveloper', () => {
  it('should render the AddDeveloper Component', async () => {
    const { getByTestId } = render(
      <ApolloProvider client={apolloClient}>
        <AddDeveloper />
      </ApolloProvider>
    );

    await waitFor(() =>
      expect(getByTestId('add-developer')).toBeInTheDocument()
    );

    const addBtn = getByTestId('add-developer');

    expect(addBtn).toHaveTextContent('Add');
  });

  it('should add a new developer', async () => {
    const { getByTestId, getAllByTestId } = render(
      <ApolloProvider client={apolloClient}>
        <AddDeveloper />
        <DeveloperList />
      </ApolloProvider>
    );

    await waitFor(() =>
      expect(getByTestId('add-developer')).toBeInTheDocument()
    );

    const addBtn = getByTestId('add-developer');
    const skillsInput = getByTestId('skills');
    const nameInput = getByTestId('name');

    userEvent.type(nameInput, 'James Brown');
    userEvent.type(skillsInput, 'Jazz Hands');

    expect(addBtn).toHaveTextContent('Add');

    userEvent.click(addBtn);

    await waitFor(() =>
      expect(getByTestId('developer-list')).toBeInTheDocument()
    );

    await waitFor(() =>
      expect(getAllByTestId('developer-list-item')).toHaveLength(3)
    );

    expect(getAllByTestId('developer-list-item')[2]).toHaveTextContent(
      'James Brown'
    );

    // @todo look at using aria / getByRole getAllByRole accessibility.
    // @todo look at (within)
  });
});
