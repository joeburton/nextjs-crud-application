import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { Accordion } from '../';

describe('Accordion', () => {
  it('should render the accordion in a collapsed state', () => {
    const { getByTestId } = render(
      <Accordion
        items={[{ title: 'Item 1', description: 'something detailed' }]}
      />
    );

    expect(getByTestId('accordion')).toBeInTheDocument();
    expect(getByTestId('accordion-description')).toHaveClass('collapsed');
  });

  it('should toggle open and closed the accordion when clicked', () => {
    const { getByText, getByTestId } = render(
      <Accordion
        items={[{ title: 'Item 1', description: 'something detailed' }]}
      />
    );

    userEvent.click(getByText('Item 1'));
    expect(getByTestId('accordion-description')).not.toHaveClass('collapsed');

    userEvent.click(getByText('Item 1'));
    expect(getByTestId('accordion-description')).toHaveClass('collapsed');
  });

  it('should render three accordion items', () => {
    const { getByText, getAllByTestId } = render(
      <Accordion
        items={[
          { title: 'Item 1', description: 'something detailed' },
          { title: 'Item 2', description: 'something detailed' },
          { title: 'Item 3', description: 'something detailed' },
        ]}
      />
    );

    const items = getAllByTestId('accordion-item');

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByText('Item 3')).toBeInTheDocument();

    expect(items.length).toEqual(3);
  });

  // test.each([
  //   [1, 1, 2],
  //   [1, 2, 3],
  //   [2, 1, 3],
  // ])(".add(%i, %i)", (a, b, expected) => {
  //   expect(a + b).toBe(expected);
  // });

  // const yourFunc = (input: any) => {
  //   let total = 0;
  //   input.forEach((value: any) => {
  //     total += value;
  //   });

  //   return total;
  // };

  // const testData = [
  //   [[1, 2, 3], 6],
  //   [[1, 3, 10], 14],
  //   [[1, 4, 500], 505],
  // ];

  // test.each(testData)(
  //   `yourFunc works correctly (%i, %i) $output`,
  //   (input, output) => {
  //     expect(yourFunc(input)).toBe(output);
  //   }
  // );

  // describe.only.each`
  //   a    | b    | expected
  //   ${1} | ${1} | ${2}
  //   ${1} | ${2} | ${3}
  //   ${2} | ${1} | ${3}
  // `(`returns $expected when $a is added $b`, ({ a, b, expected }) => {
  //   test("passes", () => {
  //     expect(a + b).toBe(expected);
  //   });
  // });
});
