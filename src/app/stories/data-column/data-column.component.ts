import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'aca-data-column',
  templateUrl: './data-column.component.html',
  styleUrls: ['./data-column.component.scss']
})
export class DataColumnComponent {

   /** Data source key. Can be either a column/property key like `title`
     *  or a property path like `createdBy.name`.
     */
    @Input()
    key: string;

    /** Value type for the column. Possible settings are 'text', 'image',
     * 'date', 'fileSize', 'location', and 'json'.
     */
    @Input()
    type: string = 'text';

    /** Value format (if supported by the parent component), for example format of the date. */
    @Input()
    format: 'medium' | 'short' | 'long' | 'full' | 'shortDate' | 'mediumDate' | 'longDate' | 'fullDate' | 'shortTime' | 'mediumTime' | 'longTime' | 'fullTime' = 'short';

    /** Toggles ability to sort by this column, for example by clicking the column header. */
    @Input()
    sortable: boolean = true;

    /** Display title of the column, typically used for column headers. You can use the
     * i18n resource key to get it translated automatically.
     */
    @Input()
    title: string = '';

    @ContentChild(TemplateRef)
    template: any;

    /** Custom tooltip formatter function. */
    @Input()
    formatTooltip: Function;

    /** Title to be used for screen readers. */
    @Input('sr-title')
    srTitle: string;

    /** Additional CSS class to be applied to column (header and cells). */
    @Input('class')
    cssClass: string;

     /** Enables/disables a Clipboard directive to allow copying of cell contents. */
    @Input()
    copyContent: boolean;

    /**  Toggles the editing support of the column data. */
    @Input()
    editable: boolean = false;

    /**  Enable or disable cell focus */
    @Input()
    focus: boolean = true;

    /** When using server side sorting the column used by the api call where the sorting will be performed */
    @Input()
    sortingKey: string;

    /** Data column header template */
    header?: TemplateRef<any>;

    @Input()
    data: any
}
