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
import {
    CardViewUpdateService,
    UpdateNotification,
    CardViewItem
} from '@alfresco/adf-core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-mycardview',
    templateUrl: './mycardview.component.html',
    styleUrls: ['./mycardview.component.scss']
})
export class MycardviewComponent implements OnInit, OnDestroy {

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
    inputEditable: boolean = false;

    @Input()
    inputMultiValueSeparator: string = ',';

    @Input()
    inputProperties: CardViewItem[] = [];

    @Input()
    inputUseChipsForMultiValueProperty: boolean = true;

    logs: string[];

    private onDestroy$ = new Subject<boolean>();

    constructor(private cardViewUpdateService: CardViewUpdateService,
                ) {
        this.logs = [];
    }

    respondToCardClick() {
        this.logs.push(`clickable field`);
    }

    ngOnInit() {
        this.cardViewUpdateService.itemUpdated$
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(this.onItemChange.bind(this));
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
