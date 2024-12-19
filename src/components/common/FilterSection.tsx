'use client';

import React from 'react';
import { Box, TextField, MenuItem, Select, FormControl } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterField {
  type: 'text' | 'select' | 'date';
  label: string;
  value: any;
  onChange: (value: any) => void;
  options?: FilterOption[];
  disabled?: boolean;
  width?: string;
}

interface FilterSectionProps {
  fields: FilterField[];
}

const FilterSection = ({ fields }: FilterSectionProps) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 2, 
      mb: 3,
      '& > *': {
        minWidth: '200px'
      }
    }}>
      {fields.map((field, index) => {
        switch (field.type) {
          case 'select':
            return (
              <FormControl key={index} sx={{ width: field.width }}>
                <Select
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  disabled={field.disabled}
                  displayEmpty
                  sx={{
                    bgcolor: 'white',
                    '& .MuiSelect-select': {
                      py: 1.5,
                    }
                  }}
                >
                  <MenuItem value="" disabled>
                    {field.label}
                  </MenuItem>
                  {field.options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          case 'date':
            return (
              <LocalizationProvider key={index} dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={field.label}
                  value={field.value}
                  onChange={field.onChange}
                  sx={{
                    bgcolor: 'white',
                    width: field.width,
                    '& .MuiInputBase-root': {
                      py: 1,
                    }
                  }}
                />
              </LocalizationProvider>
            );
          default:
            return (
              <TextField
                key={index}
                label={field.label}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                disabled={field.disabled}
                sx={{
                  bgcolor: 'white',
                  width: field.width
                }}
              />
            );
        }
      })}
    </Box>
  );
};

export default FilterSection; 