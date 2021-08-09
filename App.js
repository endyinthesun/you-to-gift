//modules
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//routes
import RootRouter from './src/routes/app-router';

//styles
import {initGlobalVar} from '_styles/global';

export default function App() {
  useEffect(() => {
    initGlobalVar();
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <RootRouter />
      </SafeAreaProvider>
    </>
  );
}
