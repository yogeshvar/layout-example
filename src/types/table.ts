export interface TableColumn {
  header: string;
  accessor: string;
  width?: string;
  type?: 'text' | 'chip' | 'action';
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterField {
  type: 'text' | 'select' | 'date';
  label: string;
  value: any;
  onChange: (value: any) => void;
  options?: FilterOption[];
  disabled?: boolean;
  width?: string;
}

export interface BaseTableProps {
  title?: string;
  subtitle?: string;
  data: any[];
  columns: TableColumn[];
  filterFields?: FilterField[];
  actionButtons?: React.ReactNode;
  actionPosition?: 'topRight' | 'bottomLeft';
} 