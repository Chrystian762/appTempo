// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Itanhaem from './views/Itanhaem';
import Mongagua from './views/Mongagua';
import Peruibe from './views/Peruibe';
import SaoPaulo from './views/SaoPaulo';


const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem:Itanhaem,
    Mongagua:Mongagua,
    Peruibe:Peruibe,
    SaoPaulo:SaoPaulo

  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}