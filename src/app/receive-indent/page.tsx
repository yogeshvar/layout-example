'use client';

import React, { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import DataTable from '../../components/common/DataTable';
import { Button, Box } from '@mui/material';
import { useFilters } from '../../hooks/useFilters';

export default function ReceiveIndent() {
  const { createFilterField } = useFilters({
    dateRange: null,
    indentList: '',
    issueList: '',
    searchIndentNo: '',
  });

  const indentOptions = [
    { label: 'Indent 1', value: 'indent1' },
    { label: 'Indent 2', value: 'indent2' },
  ];

  const issueOptions = [
    { label: 'Issue 1', value: 'issue1' },
    { label: 'Issue 2', value: 'issue2' },
  ];

  const mainTableColumns = [
    { header: 'STOCK ID', accessor: 'stockId' },
    { header: 'STOCK NAME', accessor: 'stockName' },
    { header: 'BATCHNO', accessor: 'batchNo' },
    { header: 'FROM LOCATION', accessor: 'fromLocation' },
    { header: 'INDENT QTY', accessor: 'indentQty' },
    { header: 'ISSUED QTY', accessor: 'issuedQty' },
    { header: 'RECEIVED QTY', accessor: 'receivedQty' },
    { header: 'RECEIVE QTY', accessor: 'receiveQty' },
  ];

  const receiveDetailsColumns = [
    { header: 'RECEIVE NO', accessor: 'receiveNo' },
    { header: 'RECEIVE DATE', accessor: 'receiveDate' },
    { header: 'RECEIVED QUANTITY', accessor: 'receivedQuantity' },
    { header: 'FROM LOCATION', accessor: 'fromLocation' },
    { header: 'TO LOCATION', accessor: 'toLocation' },
    { header: 'INDENT NO', accessor: 'indentNo' },
    { header: 'ISSUE NO', accessor: 'issueNo' },
    { header: 'RECEIVED BY', accessor: 'receivedBy' },
    { header: 'PRINT', accessor: 'print' },
  ];

  const actionButtons = (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button 
        variant="contained"
        color="primary"
        onClick={() => console.log('Receive clicked')}
      >
        RECEIVE
      </Button>
      <Button 
        variant="contained"
        color="error"
        onClick={() => console.log('Receive Close clicked')}
      >
        RECEIVE CLOSE
      </Button>
    </Box>
  );

  return (
    <PageLayout>
      <div className="space-y-6">
        <DataTable 
          title="Receive - (Issued Stock)"
          columns={mainTableColumns}
          data={[]} // Your data here
          filterFields={[
            createFilterField('dateRange', { 
              type: 'date',
              label: 'Select Date Range',
            }),
            createFilterField('indentList', {
              type: 'select',
              label: 'Indent List',
              options: indentOptions,
            }),
            createFilterField('issueList', {
              type: 'select',
              label: 'Issue List',
              options: issueOptions,
            }),
          ]}
          actionButtons={actionButtons}
          actionPosition="bottomLeft"
        />
        <DataTable 
          title="Receive Details"
          columns={receiveDetailsColumns}
          data={[]} // Your data here
          filterFields={[
            createFilterField('dateRange', { 
              type: 'date',
              label: 'Select Date Range',
            }),
            createFilterField('searchIndentNo', {
              type: 'text',
              label: 'Search Indent No.',
            }),
          ]}
        />
      </div>
    </PageLayout>
  );
} 