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

import { Component, OnInit, ElementRef, ViewChild, OnDestroy, Input, DoCheck } from '@angular/core';
import {
    CardViewTextItemModel,
    CardViewDateItemModel,
    CardViewDatetimeItemModel,
    CardViewBoolItemModel,
    CardViewIntItemModel,
    //CardViewFloatItemModel,
    CardViewKeyValuePairsItemModel,
    CardViewSelectItemModel,
    CardViewUpdateService,
    CardViewMapItemModel,
    UpdateNotification,
    //DecimalNumberPipe,
    CardViewArrayItemModel,
    CardViewItem
} from '@alfresco/adf-core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: './mycardview.component.html',
    styleUrls: ['./mycardview.component.scss']
})
export class MycardviewComponent implements OnInit, OnDestroy, DoCheck {

    @ViewChild('console', { static: true }) console: ElementRef;

    @Input()
    inputCopyToClipboardAction: boolean = true;

    @Input()
    inputDisplayClearAction: boolean = true;

    @Input()
    inputDisplayEmpty: boolean = true;

    @Input()
    inputDisplayNoneOption: boolean = true;

    @Input()
    editable: boolean = false;

    @Input()
    inputMultiValueSeparator: string = '.';

    @Input()
    inputProperties: CardViewItem[] = [];

    @Input()
    inputUseChipsForMultiValueProperty: boolean = true;

    @Input()
    testValueArray: number[] = [];

    isEditable = true;
    properties: CardViewItem[] = [];
    logs: string[];
    showClearDateAction = false;
    showNoneOption = false;

    private onDestroy$ = new Subject<boolean>();

    constructor(private cardViewUpdateService: CardViewUpdateService,
                //private decimalNumberPipe: DecimalNumberPipe
                ) {
        this.logs = [];
        this.createCard();
    }

    respondToCardClick() {
        this.logs.push(`clickable field`);
    }

    ngOnInit() {
        this.cardViewUpdateService.itemUpdated$
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(this.onItemChange.bind(this));
    }

    ngDoCheck() {
      console.log("CHANGE DOCHECK");
      console.log(`Current state of editable is ${this.editable}`);
      console.log(`Current state of inputCopyToClipboardAction is ${this.inputCopyToClipboardAction}`);
      console.log(`Current state of inputMultiValueSeparator is ${this.inputMultiValueSeparator}`);


      // this.createCard();
    }

    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }

    createCard() {
        this.properties = [
            new CardViewTextItemModel({
                label: 'CardView Text Item - Multivalue (chips)',
                value: [1, 2, 3, 4],
                key: 'name',
                default: 'default bar',
                multiline: true,
                multivalued: true,
                icon: 'icon',
                editable: this.editable
            }),
            new CardViewDateItemModel({
                label: 'CardView Date Item - Multivalue (chips)',
                value: [new Date(1983, 11, 24, 10, 0, 30)],
                key: 'date',
                default: new Date(1983, 11, 24, 10, 0, 30),
                format: 'shortDate',
                editable: this.editable,
                multivalued: true
            }),
            new CardViewDatetimeItemModel({
              label: 'CardView Datetime Item - Multivalue (chips)',
              value: [new Date(1983, 11, 24, 10, 0, 0)],
              key: 'datetime',
              default: new Date(1983, 11, 24, 10, 0, 0),
              format: 'short',
              editable: this.editable,
              multivalued: true
            }),
            new CardViewBoolItemModel({
                label: 'Agree to all terms and conditions',
                value: true,
                key: 'boolean',
                default: false,
                editable: this.editable
            }),
            new CardViewIntItemModel({
                label: 'CardView Int Item',
                value: 213,
                key: 'int',
                default: 1,
                editable: this.editable
            }),
            /*
            new CardViewFloatItemModel({
                label: 'CardView Float Item - Multivalue (chips)',
                value: [9.9],
                key: 'float',
                default: 0.0,
                editable: this.editable,
                multivalued: true,
                pipes: [{ pipe: this.decimalNumberPipe }]
            }),
            */
            new CardViewKeyValuePairsItemModel({
                label: 'CardView Key-Value Pairs Item',
                value: [{ name: 'hey', value: 'you' }, { name: 'hey', value: 'you' }],
                key: 'key-value-pairs',
                editable: this.editable
            }),
            new CardViewSelectItemModel({
                label: 'CardView Select Item',
                value: 'one',
                options$: of([{ key: 'one', label: 'One' }, { key: 'two', label: 'Two' }]),
                key: 'select',
                editable: this.editable
            }),
            new CardViewMapItemModel({
                label: 'My map',
                value: new Map([['999', 'My Value']]),
                key: 'map',
                default: 'default map value'
            }),
            new CardViewTextItemModel({
                label: 'This is clickable ',
                value: 'click here',
                key: 'click',
                default: 'click here',
                editable: this.editable,
                clickable: true,
                icon: 'close',
                clickCallBack: () => {
                    this.respondToCardClick();
                }
            }),
            new CardViewArrayItemModel({
                label: 'CardView Array of items',
                value: of([
                    { icon: 'directions_bike', value: 'Zlatan' },
                    { icon: 'directions_bike', value: 'Lionel Messi' },
                    { value: 'Mohamed', directions_bike: 'save' },
                    { value: 'Ronaldo' }
                ]),
                key: 'array',
                icon: 'edit',
                default: 'Empty',
                noOfItemsToDisplay: 2,
                editable: this.editable
            })
        ];
    }

    onItemChange(notification: UpdateNotification) {
        let value = notification.changed[notification.target.key];

        if (notification.target.type === 'keyvaluepairs') {
            value = JSON.stringify(value);
        }

        this.logs.push(`[${notification.target.label}] - ${value}`);
        this.console.nativeElement.scrollTop = this.console.nativeElement.scrollHeight;
    }

    toggleEditable() {
        this.editable = !this.editable;
        this.createCard();
    }

    toggleClearDate() {
        this.showClearDateAction = !this.showClearDateAction;
    }

    toggleNoneOption() {
        this.showNoneOption = !this.showNoneOption;
    }

    reset() {
        this.editable = true;
        this.createCard();
        this.logs = [];
    }
}
