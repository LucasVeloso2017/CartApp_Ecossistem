import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppProvider from './hooks';
import Routes from './routes/index.routes';


const Index: React.FC = () => {
  return(
    <AppProvider>
      <StatusBar style="auto" />
      <Routes/>
    </AppProvider>
  );
}

export default Index;