import React from 'react';

import { storiesOf } from '@storybook/react';
import { Spacer } from '../src/components/blocks';

const getDisplayStyle = ({ vertical }) => ({
  display: vertical ? 'block' : 'inline-block',
});
const TestComponent = props => (
  <React.Fragment>
    <div style={getDisplayStyle({ vertical: props.vertical })}>before</div>
    <Spacer style={getDisplayStyle({ vertical: props.vertical })} {...props} />
    <div style={getDisplayStyle({ vertical: props.vertical })}>after</div>
  </React.Fragment>
);
storiesOf('Spacer', module)
  .add('with default vertical space', () => <TestComponent vertical />)
  .add('with default horizontal space', () => <TestComponent horizontal />)
  .add('with vertical space 1', () => <TestComponent vertical size={1} />)
  .add('with vertical space 2', () => <TestComponent vertical size={2} />)
  .add('with vertical space 3', () => <TestComponent vertical size={3} />)
  .add('with vertical space 4', () => <TestComponent vertical size={4} />)
  .add('with horizontal space 1', () => <TestComponent horizontal size={1} />)
  .add('with horizontal space 2', () => <TestComponent horizontal size={2} />)
  .add('with horizontal space 3', () => <TestComponent horizontal size={3} />)
  .add('with horizontal space 4', () => <TestComponent horizontal size={4} />);
