import { useState } from 'react';
import { FilterField } from '../types/table';

export const useFilters = (initialFilters: Partial<Record<string, any>> = {}) => {
  const [filters, setFilters] = useState(initialFilters);

  const createFilterField = (key: string, config: Partial<FilterField>): FilterField => ({
    type: config.type || 'text',
    label: config.label || key,
    value: filters[key],
    onChange: (value: any) => setFilters(prev => ({ ...prev, [key]: value })),
    ...config,
  });

  return {
    filters,
    setFilters,
    createFilterField,
  };
}; 