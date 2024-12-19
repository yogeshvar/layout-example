'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gray-50">
        <main className="p-6">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout; 