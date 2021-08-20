import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadZipDialogComponent as DownloadZipDialogComponentAdf } from '@alfresco/adf-core';
import { downloadEntry, loremIpsumTextNode } from './mock/stub-data';

@Component({
  selector: 'aca-download-zip-dialog',
  templateUrl: './download-zip-dialog.component.html'
})
export class DownloadZipDialogComponent implements OnInit {
  @Input()
  showLoading: boolean;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    if (!this.showLoading) {
      downloadEntry.entry.status = 'DONE';
    } else {
      downloadEntry.entry.status = 'PACKING';
    }
  }

  openDownloadZipDialog() {
    this.dialog.open(DownloadZipDialogComponentAdf, {
      minWidth: '50%',
      data: {
        nodeIds: [loremIpsumTextNode.entry.id]
      }
    });
  }
}
