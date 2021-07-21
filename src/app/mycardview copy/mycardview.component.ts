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

import { Component, DoCheck, Input } from '@angular/core';
import {
    CardViewTextItemModel,
    CardViewDateItemModel,
    CardViewItem
} from '@alfresco/adf-core';

@Component({
    templateUrl: './mycardview.component.html',
    styleUrls: ['./mycardview.component.scss']
})
export class MycardviewTestComponent implements DoCheck{

    @Input()
    editable: boolean = true;

    properties: CardViewItem[] = [
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
    ];

    ngDoCheck() {
      console.log(`Current value of editable is ${this.editable}`);
    }


    constructor() {}
}
