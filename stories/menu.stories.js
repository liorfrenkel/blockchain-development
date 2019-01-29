import React from 'react';

import { storiesOf } from '@storybook/react';
import {boolean} from '@storybook/addon-knobs'
import { Menu } from '../src/components/blocks';

storiesOf('Menu', module)
  .add('Menu', () => <Menu right={boolean('Right', false)}>
    <ul>
      <li><a href="">Item 1</a></li>
      <li><a href="">Item 1</a></li>
      <li><a href="">Item 1</a></li>
    </ul>
  </Menu>);
