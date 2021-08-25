import { Component, Input, OnInit } from '@angular/core';
import { EditJsonDialogSettings, EditJsonDialogComponent as EditJsonDialogComponentAdf } from '@alfresco/adf-core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'aca-edit-json-dialog',
  templateUrl: './edit-json-dialog.component.html'
})
export class EditJsonDialogComponent implements OnInit {
  @Input()
  dialogTitle: string;

  @Input()
  isJsonEditable: boolean;

  private settings: EditJsonDialogSettings;

  buttonText: string = 'Insepct JSON';

  private json: any = {
    maxValue: 50,
    minValue: 10,
    values: [10, 15, 14, 27, 35, 23, 49, 38],
    measurementId: 'm_10001',
    researcherId: 's_10002'
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    if (this.isJsonEditable) this.buttonText = 'Edit JSON';

    this.settings = {
      title: this.dialogTitle,
      editable: this.isJsonEditable,
      value: JSON.stringify(this.json, null, '  ')
    };
  }

  openEditJsonDialog() {
    this.dialog
      .open(EditJsonDialogComponentAdf, {
        data: this.settings,
        minWidth: `50%`
      })
      .afterClosed()
      .subscribe((value: string) => {
        if (value) this.settings.value = JSON.stringify(JSON.parse(value), null, '  ');
      });
  }
}
