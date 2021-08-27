import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, DataColumn, DataRow, MaterialModule, ObjectDataTableAdapter } from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { DatatableCustomComponent } from './datatable-custom-data.component';

export default {
  component: DatatableCustomComponent,
  title: 'Core/Components/Datatable/Custom data and resolver',
  decorators: [
    moduleMetadata({
      declarations: [DatatableCustomComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule,
        CommonModule
      ]
    })
  ],
  argTypes: {
    data: { table: { disable: true } },
    resolverFn: { table: { disable: true } }
  }
} as Meta;

class FilteredDataAdapter extends ObjectDataTableAdapter {
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

  constructor(data?: any[], schema?: DataColumn[]) {
    super(data, schema);
  }
}

const _createdBy: any = {
  name: 'Administrator',
  email: 'admin@alfresco.com'
};

const resolverData = new FilteredDataAdapter(
  [
    {
      id: 1,
      name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      createdOn: new Date(2016, 6, 2, 15, 8, 1),
      createdBy: _createdBy,
      icon: 'material-icons://folder_open',
      json: null,
      users: [
        {
          firstName: 'Super',
          lastName: 'Man'
        },
        {
          firstName: 'Iron',
          lastName: 'Man'
        }
      ],
      status: ['I am here to save the world.. By world means AMERICA', 'That nobody is John Wick…']
    },
    {
      id: 2,
      name: 'Name 2',
      createdOn: new Date(2016, 6, 2, 15, 8, 2),
      createdBy: _createdBy,
      icon: 'material-icons://accessibility',
      json: null,
      users: [
        {
          firstName: 'Mister',
          lastName: 'Bean'
        },
        {
          firstName: 'Doctor',
          lastName: 'Strange'
        }
      ],
      status: ['I am here to save the world.. By world means AMERICA', 'That nobody is John Wick…']
    },
    {
      id: 3,
      name: 'Name 3',
      createdOn: new Date(2016, 6, 2, 15, 8, 3),
      createdBy: _createdBy,
      icon: 'material-icons://alarm',
      json: null,
      users: [
        {
          firstName: 'Thunder',
          lastName: 'Thor'
        },
        {
          firstName: 'Marvel',
          lastName: 'Avenger'
        }
      ],
      status: ['I am here to save the world.. By world means AMERICA', 'That nobody is John Wick…']
    },
    {
      id: 4,
      name: 'Image 8',
      createdOn: new Date(2016, 6, 2, 15, 8, 4),
      createdBy: _createdBy,
      icon: 'material-icons://alarm',
      json: {
        id: 4,
        name: 'Image 8',
        createdOn: new Date(2016, 6, 2, 15, 8, 4),
        createdBy: {
          name: 'Felipe',
          lastName: 'Melo'
        },
        icon: 'material-icons://alarm'
      },
      users: [
        {
          firstName: 'Spider',
          lastName: 'Man'
        },
        {
          firstName: '17',
          lastName: 'Again'
        }
      ],
      status: ['I am here to save the world.. By world means AMERICA', 'That nobody is John Wick…']
    },
    {
      id: 5,
      name: 'I am using custom resolver',
      createdOn: new Date(2016, 6, 2, 15, 8, 4),
      createdBy: _createdBy,
      icon: 'material-icons://person_outline',
      users: [
        {
          firstName: 'Captain',
          lastName: 'America'
        },
        {
          firstName: 'John',
          lastName: 'Wick'
        }
      ],
      status: ['I am here to save the world.. By world means AMERICA', 'That nobody is John Wick…']
    }
  ],
  [
    { type: 'image', key: 'icon', title: '', srTitle: 'Thumbnail' },
    { type: 'text', key: 'id', title: 'Id', sortable: true, cssClass: '' },
    { type: 'date', key: 'createdOn', title: 'Created On', sortable: true, cssClass: 'adf-ellipsis-cell adf-expand-cell-2' },
    { type: 'text', key: 'name', title: 'Name', cssClass: 'adf-ellipsis-cell', sortable: true },
    { type: 'text', key: 'createdBy.name', title: 'Created By', sortable: true, cssClass: '' },
    { type: 'json', key: 'json', title: 'Json', cssClass: 'adf-expand-cell-2' },
    { type: 'text', key: 'users', title: 'Users', cssClass: 'adf-expand-cell-2' },
    { type: 'json', key: 'status', title: 'Status', cssClass: 'adf-expand-cell-2' }
  ]
);

const resolver = function (row: DataRow, col: DataColumn): any {
  const value = row.getValue(col.key);
  if (col.key === 'users') {
    return (value || []).map((user) => `${user.firstName} ${user.lastName}`).toString();
  }

  if (col.key === 'status') {
    const users = row.getValue('users');
    return (value || []).map((status, index) => ({ name: `${users[index].firstName} ${users[index].lastName}`, status }));
  }

  return value;
};

const rows = [
  { id: 1, name: '1 Name 1' },
  { id: 2, name: '2 Name 2' },
  { id: 3, name: '3 Name 3' },
  { id: 4, name: '4 Name 4' }
];

const columnsSchema = [
  {
    type: 'text',
    key: 'id',
    title: 'Id',
    sortable: true
  },
  {
    type: 'text',
    key: 'name',
    title: 'Name',
    sortable: true
  }
];

const Template: Story<DatatableCustomComponent> = (args) => ({
  props: {
    ...args
  }
});

export const CustomRowsAndColumns = Template.bind({});
CustomRowsAndColumns.args = {
  rows: rows,
  columns: columnsSchema
};

export const CustomRowsAndColumnsSortedDesc = Template.bind({});
CustomRowsAndColumnsSortedDesc.args = {
  rows: rows,
  columns: columnsSchema,
  sorting: ['name', 'desc']
};

export const Resolver = Template.bind({});
Resolver.args = {
  data: resolverData,
  resolverFn: resolver
};
