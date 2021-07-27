import { ObjectDataTableAdapter } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input()
  stickyHeader: boolean = false;

  @Input()
  data = new ObjectDataTableAdapter();

  @Input()
  multiSelect: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
