import { ApolloProvider } from '@apollo/client';
import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import apolloClient from '../../lib/apollo/apollo';
import { DeveloperList } from '../';

describe('EditDeveloper', () => {
  it('should update the developer details', async () => {
    const {
      getAllByTestId,
      getByTestId,
      findByTestId,
      getAllByRole,
      getByRole,
      getByLabelText,
      getByText,
    } = render(
      <ApolloProvider client={apolloClient}>
        <DeveloperList />
      </ApolloProvider>
    );

    await findByTestId('developer-list');

    expect(getAllByTestId('developer-details')).toHaveLength(2);

    const editBtn = getAllByRole('button', { name: /Edit/i });

    userEvent.click(editBtn[1]);

    expect(getByTestId('edit-developer')).toBeInTheDocument();

    const developerNameInput = getByLabelText('developer-name');
    const developerSkillsInput = getByLabelText('developer-skills');

    expect(developerNameInput).toHaveValue('Jill Hill');
    expect(developerSkillsInput).toHaveValue('C#, SQL');

    userEvent.clear(developerNameInput);
    userEvent.clear(developerSkillsInput);
    userEvent.type(developerNameInput, 'Gill Hill');
    userEvent.type(developerSkillsInput, 'Java, SQL');

    const updateBtn = getByRole('button', { name: /Update/i });
    expect(updateBtn).toBeInTheDocument();

    act(() => {
      userEvent.click(updateBtn);
    });

    await waitFor(() =>
      expect(getAllByTestId('developer-details')).toHaveLength(2)
    );

    expect(getByText(/Gill Hill/)).toBeInTheDocument();
  });
});
