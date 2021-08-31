import { ObjectDataTableAdapter } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-empty-list',
  templateUrl: './empty-list.component.html'
})
export class EmptyListComponent implements OnInit {
  @Input()
  data: ObjectDataTableAdapter = new ObjectDataTableAdapter();

  constructor() {}

  ngOnInit(): void {}
}
