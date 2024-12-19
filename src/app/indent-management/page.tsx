'use client';

import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import DataTable from '../../components/common/DataTable';
import { useFilters } from '../../hooks/useFilters';
import { TableColumn } from '../../types/table';

const columns: TableColumn[] = [
  { header: 'INDENT NO', accessor: 'indentNo' },
  { header: 'INDENT DATE', accessor: 'indentDate' },
  { header: 'FROM LOCATION', accessor: 'fromLocation' },
  { header: 'TO LOCATION', accessor: 'toLocation' },
  { header: 'CREATED BY', accessor: 'createdBy' },
  { header: 'PRINT', accessor: 'print', type: 'action' },
  { header: 'APPROVE', accessor: 'approve', type: 'action' },
  { header: 'AUTHORIZE', accessor: 'status', type: 'chip' },
  { header: 'EDIT/VIEW', accessor: 'actions', type: 'action' },
];

const sampleData = [
  {
    indentNo: '#4910',
    indentDate: '#4910',
    fromLocation: '#4910',
    toLocation: '#4910',
    createdBy: '#4910',
    print: true,
    approve: true,
    status: 'PENDING',
    actions: ['edit', 'view'],
  },
];

export default function IndentManagement() {
  const { createFilterField } = useFilters({
    search: '',
    date: null,
  });

  const handleAction = (type: string, value: any) => {
    console.log('Action:', type, value);
  };

  return (
    <PageLayout>
      <DataTable
        title="Indent Management"
        columns={columns}
        data={sampleData}
        filterFields={[
          createFilterField('search', { 
            type: 'text',
            label: 'Search',
          }),
          createFilterField('date', {
            type: 'date',
            label: 'Date',
          }),
        ]}
        onAction={handleAction}
      />
    </PageLayout>
  );
} 