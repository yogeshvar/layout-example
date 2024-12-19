'use client';

import React from 'react';
import MainLayout from './MainLayout';
import { Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const router = useRouter();

  return (
    <MainLayout>
      <Box sx={{ 
        mb: 3, 
        display: 'flex', 
        gap: 2,
        justifyContent: 'center' 
      }}>
        <Button 
          variant="outlined"
          onClick={() => router.push('/department-indent')}
        >
          Department Indent
        </Button>
        <Button 
          variant="outlined"
          onClick={() => router.push('/receive-indent')}
        >
          Receive Indent
        </Button>
        <Button 
          variant="outlined"
          onClick={() => router.push('/indent-management')}
        >
          Indent Management
        </Button>
        <Button
          variant='outlined'
          onClick={() => router.push('/indent-issue-transfer')}
        >
          Indent Issue Transfer
        </Button>
      </Box>
      <div className="space-y-6">
        {children}
      </div>
    </MainLayout>
  );
};

export default PageLayout; 