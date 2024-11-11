// RootLayout.jsx
import React from 'react';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import Dashboard from './Dashboard';

const RootLayout = () => {
  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} p={5}>
        <Dashboard />
      </Grid>
    </ChakraProvider>
  );
};

export default RootLayout;
