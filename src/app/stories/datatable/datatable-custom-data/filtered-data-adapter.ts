import { DataColumn, DataRow, ObjectDataTableAdapter } from '@alfresco/adf-core';

export class FilteredDataAdapter extends ObjectDataTableAdapter {
  filterValue = '';
  filterKey = 'name';

  getRows(): Array<DataRow> {
    let rows = super.getRows();
    const filter = (this.filterValue || '').trim().toLowerCase();

    if (this.filterKey && filter) {
      rows = rows.filter((row) => {
        const value = row.getValue(this.filterKey);
        if (value !== undefined && value !== null) {
          const stringValue: string = value.toString().trim().toLowerCase();
          return stringValue.startsWith(filter);
        }

        return false;
      });
    }
    return rows;
  }

  getValue(row: DataRow, col: DataColumn, resolver?: (row: DataRow, col: DataColumn) => any): any {
    if (!row) {
      throw new Error('Row not found');
    }

    if (!col) {
      throw new Error('Column not found');
    }

    if (resolver) {
      return resolver(row, col);
    }

    return row;
  }

  constructor(data?: any[], schema?: DataColumn[]) {
    super(data, schema);
  }
}
