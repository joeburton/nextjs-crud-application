import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { render, waitFor } from '@testing-library/react';
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
    const { getByTestId, getAllByTestId, debug } = render(
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
      expect(getAllByTestId('developer-list-item').length).toEqual(3)
    );

    // @todo look at using aria / getByRole getAllByRole accessibility.
    // @todo look at (within)
    // debug();
  });
});
