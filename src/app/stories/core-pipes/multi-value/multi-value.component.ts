import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-multi-value',
  templateUrl: './multi-value.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class MultiValueComponent implements OnInit {
  @Input()
  showMultiValue: boolean = false;

  @Input()
  animals: string[];

  @Input()
  customSeparator: string = ', ';

  constructor() {}

  ngOnInit(): void {}
}
