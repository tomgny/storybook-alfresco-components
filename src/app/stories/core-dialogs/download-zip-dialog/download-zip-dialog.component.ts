import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadZipDialogComponent as DownloadZipDialogComponentAdf } from '@alfresco/adf-core';
import { loremIpsumTextNode } from './mock/stub-data';

@Component({
  selector: 'aca-download-zip-dialog',
  templateUrl: './download-zip-dialog.component.html',
})
export class DownloadZipDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDownloadZipDialog() {
    this.dialog.open(DownloadZipDialogComponentAdf, {
      minWidth: '50%',
      disableClose: false,
      data: {
          nodeIds: [loremIpsumTextNode.entry.id]
      }
  });
  }

}
