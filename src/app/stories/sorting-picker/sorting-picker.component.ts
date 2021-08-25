import { Component, Input, OnInit } from '@angular/core';
import { SortingType } from './models/sorting-type.model';

@Component({
  selector: 'aca-sorting-picker',
  templateUrl: './sorting-picker.component.html'
})
export class SortingPickerComponent implements OnInit {
  /**
   * Current sorting direction
   */
  @Input()
  ascending: boolean;

  /**
   * Available sorting options
   */
  @Input()
  options: Array<SortingType>;

  /**
   * Currently selected option key
   */
  @Input()
  selected: string;

  onSortingChanged(_: any) {}

  onValueChanged(_: any) {}

  constructor() {}

  ngOnInit(): void { }
}
