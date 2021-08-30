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

import { SearchTextStateEnum } from '@alfresco/adf-core';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
    selector: 'aca-search-text-input',
    templateUrl: './search-text-input.component.html',
    styleUrls: ['./search-text-input.component.scss']
})
export class SearchTextInputComponent implements OnInit, OnDestroy {

    @ViewChild('console', { static: true }) console: ElementRef;
    logs: string[];

    /** Toggles auto-completion of the search input field. */
    @Input()
    autocomplete: boolean = false;

    /** Toggles whether to use an expanding search control. If false
     * then a regular input is used.
     */
    @Input()
    expandable: boolean = true;

    /** Type of the input field to render, e.g. "search" or "text" (default). */
    @Input()
    inputType: string = 'text';

    /** Toggles "find-as-you-type" suggestions for possible matches. */
    @Input()
    liveSearchEnabled: boolean = true;

    /** Trigger autocomplete results on input change. */
    @Input()
    searchAutocomplete: any = false;

    /** Search term preselected */
    @Input()
    searchTerm: string = '';

    /** Debounce time in milliseconds. */
    @Input()
    debounceTime: number = 0;

     /** Listener for results-list events (focus, blur and focusout). */
    @Input()
    focusListener: Observable<FocusEvent>;

    /** Collapse search bar on submit. */
    @Input()
    collapseOnSubmit: boolean = true;

    /** Default state expanded or Collapsed. */
     @Input()
    defaultState: SearchTextStateEnum = SearchTextStateEnum.collapsed;

    /** Toggles whether to collapse the search on blur. */
    @Input()
    collapseOnBlur: boolean = true;

    /** Toggles whether to show a clear button that closes the search */
    @Input()
    showClearButton: boolean = false;

    private onDestroy$ = new Subject<boolean>();

    constructor() {
        this.logs = [];
    }

    ngOnInit(): void { }

    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }

    onSubmit(event) {
        const value = (event.target as HTMLInputElement).value;
        this.logs.push(`Searched with value '${value}'`);
    }

    inputChange(value: string) {
        this.searchTerm = value;
        this.logs.push(`Searched with value '${value}'`);
    }
}
