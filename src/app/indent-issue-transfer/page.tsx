'use client';

import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import DataTable from '../../components/common/DataTable';
import { useFilters } from '../../hooks/useFilters';
import { Button } from '@mui/material';
import { TableColumn } from '../../types/table';

const indentColumns: TableColumn[] = [
  { header: 'ITEM CODE', accessor: 'itemCode' },
  { header: 'ITEM NAME', accessor: 'itemName' },
  { header: 'GENERIC NAME', accessor: 'genericName' },
  { header: 'MAIN STORE', accessor: 'mainStore' },
  { header: 'FRANCHISE', accessor: 'franchise' },
  { header: 'QUANTITY', accessor: 'quantity' },
];

const indentDetailsColumns: TableColumn[] = [
  { header: 'INDENT NO', accessor: 'indentNo' },
  { header: 'INDENT DATE', accessor: 'indentDate' },
  { header: 'FROM LOCATION', accessor: 'fromLocation' },
  { header: 'TO LOCATION', accessor: 'toLocation' },
  { header: 'CREATED BY', accessor: 'createdBy' },
  { header: 'PRINT', accessor: 'print' },
];

export default function DepartmentIndent() {
  const { createFilterField } = useFilters({
    fromLocation: 'Main Store',
    toLocation: '',
    searchItem: '',
    dateRange: null,
    searchIndentNo: '',
  });

  const locationOptions = [
    { label: 'Main Store', value: 'main_store' },
    { label: 'Franchise', value: 'franchise' },
  ];

  const mainTableFilters = [
    createFilterField('fromLocation', { 
      type: 'text',
      disabled: true,
    }),
    createFilterField('toLocation', {
      type: 'select',
      options: locationOptions,
    }),
    createFilterField('searchItem', {
      type: 'select',
      options: locationOptions,
    }),
  ];

  const detailsTableFilters = [
    createFilterField('dateRange', { 
      type: 'date',
      label: 'Select Date Range',
    }),
    createFilterField('searchIndentNo', {
      type: 'text',
      label: 'Search Indent No.',
    }),
  ];

  const actionButtons = (
    <>
        <Button 
        variant="outlined"
        onClick={() => console.log('Issue clicked')}
        >
        Issue
        </Button>
        <Button 
        variant="outlined"
        onClick={() => console.log('Indent Close clicked')}
        >
        Indent Close
        </Button>
    </>
  );

  return (
    <PageLayout>
      <DataTable
        title="Department Indent"
        columns={indentColumns}
        data={[]}
        filterFields={mainTableFilters}
        actionButtons={actionButtons}
        actionPosition="topRight"
      />
      <DataTable
        title="Department Indent Details"
        columns={indentDetailsColumns}
        data={[]}
        filterFields={detailsTableFilters}
      />
    </PageLayout>
  );
} 