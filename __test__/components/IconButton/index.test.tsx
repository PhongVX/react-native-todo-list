import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from 'src/components/IconButton';

test('renders correctly', () => {
  const tree = renderer.create(<IconButton>Hello World</IconButton>).toJSON();
  expect(tree).toMatchSnapshot();
});