/**
 * @jest-environment node
 */

import React from 'react';
import { unWrapped } from '../SummaryView.jsx';
import renderer from 'react-test-renderer';
it('renders correctly', () => {
  const props = {
    answeredQuestions: [
      {
        id: 'C02',
        text: 'Please provide us with a contact number?',
        reply: '',
        type: 'string',
        next: 'C03',
      },
      {
        id: 'C03',
        text: 'Please provide us with a contact email address?',
        reply: '',
        type: 'string',
        next: null,
      },
    ],
  };
  const tree = renderer.create(<unWrapped props={props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
