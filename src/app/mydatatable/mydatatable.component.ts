import { Component, Input, OnInit } from '@angular/core';
import { ObjectDataTableAdapter } from '@alfresco/adf-core';

@Component({
  selector: 'aca-mydatatable',
  templateUrl: './mydatatable.component.html',
  styleUrls: ['./mydatatable.component.scss']
})
export class MydatatableComponent implements OnInit {

  @Input()
  stickyHeader: boolean = false;

  @Input()
  data = new ObjectDataTableAdapter();

  @Input()
  multiSelect: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  /*
  data = new ObjectDataTableAdapter(
    [
      {
        id: 1,
        firstName: 'Name #1',
        lastName: 'Lastname #1',
        icon: 'material-icons://folder_open'
      },
      {
        id: 2,
        firstName: 'Name #2',
        lastName: 'Lastname #2',
        icon: 'material-icons://accessibility'
      },
      {
        id: 3,
        firstName: 'Name #3',
        lastName: 'Lastname #3',
        icon: 'material-icons://alarm'
      }
    ]
  );
    */
}
