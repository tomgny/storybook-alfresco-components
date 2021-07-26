/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, ElementRef, ViewChild, OnDestroy, Input } from '@angular/core';
import { CardViewUpdateService, UpdateNotification, CardViewItem} from '@alfresco/adf-core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mycardview',
  templateUrl: './mycardview.component.html',
  styleUrls: ['./mycardview.component.scss']
})
export class MycardviewComponent implements OnInit, OnDestroy {
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
