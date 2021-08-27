import { CardViewItem, CardViewUpdateService, CoreModule, UpdateNotification } from '@alfresco/adf-core';
import { Component, ElementRef, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'aca-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss']
})
export class CardviewComponent implements OnInit {
  @ViewChild('console', { static: true }) console: ElementRef;
  logs: string[];
  defaultDataSource: CardViewItem[];

  /**
   * Toggles whether or not to enable copy to clipboard action.
   */
  @Input()
  copyToClipboardAction: boolean = true;

  /**
   * Toggles whether or not to display clear action.
   */
  @Input()
  displayClearAction: boolean = true;

  /**
   * Toggles whether or not to show empty items in non-editable mode.
   */
  @Input()
  displayEmpty: boolean = true;

  /**
   * Toggles whether or not to display none option.
   */
  @Input()
  displayNoneOption: boolean = true;

  /**
   * Toggles whether or not the items can be edited.
   */
  @Input()
  editable: boolean = false;

  /**
   * String separator between multi-value property items.
   */
  @Input()
  multiValueSeparator: string = ',';

  /**
   * Items to show in the card view.
   * @required
   */
  @Input()
  properties: CardViewItem[] = [];

  /**
   * Toggles whether or not to enable chips for multivalued properties.
   */
  @Input()
  useChipsForMultiValueProperty: boolean = true;

  private onDestroy$ = new Subject<boolean>();

  constructor(private cardViewUpdateService: CardViewUpdateService) {
    this.logs = [];
  }

  respondToCardClick() {
    this.logs.push(`clickable field`);
  }

  ngOnInit() {
    this.cardViewUpdateService.itemUpdated$.pipe(takeUntil(this.onDestroy$)).subscribe(this.onItemChange.bind(this));
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  onItemChange(notification: UpdateNotification) {
    let value = notification.changed[notification.target.key];

    if (notification.target.type === 'keyvaluepairs') {
      value = JSON.stringify(value);
    }

    this.logs.push(`[${notification.target.label}] - ${value}`);
    this.console.nativeElement.scrollTop = this.console.nativeElement.scrollHeight;
  }
}

@NgModule({
  declarations: [CardviewComponent],
  imports: [CoreModule.forChild()],
  exports: [CardviewComponent]
})
export class CardviewModule {}
