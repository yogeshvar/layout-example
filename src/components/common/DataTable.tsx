'use client';

import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  IconButton,
  Chip,
} from '@mui/material';
import FilterSection from './FilterSection';
import PrintIcon from '@mui/icons-material/Print';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Column {
  header: string;
  accessor: string;
  width?: string;
  type?: 'text' | 'chip' | 'action';
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  actionButtons?: React.ReactNode;
  actionPosition?: 'topRight' | 'bottomLeft';
  filterFields?: any[];
  title?: string;
  subtitle?: string;
  onAction?: (action: string, value: any) => void;
}

// Internal StatusCell component
const StatusCell = ({ value }: { value: string }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return {
          color: 'warning',
          label: 'PENDING'
        };
      case 'approved':
        return {
          color: 'success',
          label: 'APPROVED'
        };
      default:
        return {
          color: 'default',
          label: status
        };
    }
  };

  const { color, label } = getStatusColor(value);

  return (
    <Chip
      label={label}
      color={color as any}
      size="small"
      variant="outlined"
    />
  );
};

const DataTable = ({ 
  columns, 
  data, 
  actionButtons, 
  actionPosition = 'topRight',
  filterFields,
  title,
  subtitle,
  onAction,
}: DataTableProps) => {
  const renderCell = (column: Column, value: any) => {
    switch (column.type) {
      case 'chip':
        return <StatusCell value={value} />;
      case 'action':
        if (column.accessor === 'print') {
          return (
            <IconButton onClick={() => onAction?.('print', value)}>
              <PrintIcon color="primary" />
            </IconButton>
          );
        }
        if (column.accessor === 'approve') {
          return (
            <IconButton onClick={() => onAction?.('approve', value)}>
              <CheckCircleIcon color="success" />
            </IconButton>
          );
        }
        if (column.accessor === 'actions') {
          return (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={() => onAction?.('view', value)}>
                <VisibilityIcon />
              </IconButton>
              <IconButton onClick={() => onAction?.('edit', value)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => onAction?.('more', value)}>
                <MoreVertIcon />
              </IconButton>
            </Box>
          );
        }
        return value;
      default:
        return value;
    }
  };

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
      {title && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" component="h2" sx={{ color: 'text.primary' }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mt: 0.5 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {filterFields && (
        <Box sx={{ mb: 3 }}>
          <FilterSection fields={filterFields} />
        </Box>
      )}
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: actionPosition === 'topRight' ? 'flex-end' : 'flex-start',
        mb: actionPosition === 'topRight' ? 2 : 0,
        mt: actionPosition === 'bottomLeft' ? 2 : 0
      }}>
        {actionPosition === 'topRight' && actionButtons}
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: 500,
                    color: 'text.secondary',
                    borderBottom: '2px solid rgba(224, 224, 224, 1)',
                    width: column.width
                  }}
                >
                  {column.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <TableCell 
                    key={colIndex}
                    sx={{
                      color: 'text.secondary',
                      borderBottom: rowIndex === data.length - 1 ? 'none' : '1px solid rgba(224, 224, 224, 0.5)'
                    }}
                  >
                    {renderCell(column, row[column.accessor])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: actionPosition === 'bottomLeft' ? 'flex-start' : 'flex-end',
        mt: actionPosition === 'bottomLeft' ? 2 : 0
      }}>
        {actionPosition === 'bottomLeft' && actionButtons}
      </Box>
    </Paper>
  );
};

export default DataTable; 