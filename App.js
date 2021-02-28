import React from 'react'
import Navigation from './src/config/navigationConfig/index'

import {
  View,
  Text,
} from 'react-native';

const App: () => React$Node = (props) => {

    return (
        <>
           <Navigation />
        </>
    );
};


export default App;
