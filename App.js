//modules
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

//routes
import RootRouter from './src/routes/app-router';

//styles
import {initGlobalVar} from '_styles/global';

export default function App() {
  useEffect(() => {
    //styles const
    initGlobalVar();
  }, []);

  return (
    <SafeAreaProvider>
      <RootRouter />
    </SafeAreaProvider>
  );
}
