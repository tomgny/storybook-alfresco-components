import { Component, Input } from '@angular/core';
import { SortingType } from './models/sorting-type.model';

@Component({
  selector: 'aca-sorting-picker',
  templateUrl: './sorting-picker.component.html'
})
export class SortingPickerComponent {
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

  /**
   * Raised each time direction gets changed.
   */
  onSortingChanged(_: any) {}

  /**
   * Raised each time sorting key gets changed.
   */
  onValueChanged(_: any) {}

  constructor() {}
}
