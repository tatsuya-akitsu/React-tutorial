import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../App';

storiesOf('App', module)
  .add('default', () => <App />)
  .add('setMessage', () => <App message="ようこそReactの世界へ" />);