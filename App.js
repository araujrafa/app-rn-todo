import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/routes';

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <AppContainer />
)