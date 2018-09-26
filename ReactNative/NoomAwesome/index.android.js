/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/Albumlist';

const NoomAwesome = () => (
  <View style={{ flex: 1 }} >
    <Header headerText='Album!' />
    <Albumlist />
  </View>
);

AppRegistry.registerComponent('NoomAwesome', () => NoomAwesome);
