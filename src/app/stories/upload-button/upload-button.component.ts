import { NotificationService } from '@alfresco/adf-core';
import { File } from '@alfresco/js-api';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.scss']
})
export class UploadButtonComponent implements OnInit {

  @Input()
  acceptedFilesType: string = '*';

  @Input()
  comment: string = undefined;

  @Input()
  disabled: boolean = false;

  @Input()
  file: File = undefined;

  @Input()
  majorVersion: boolean = false;

  @Input()
  maxFilesSize: number = undefined;

  @Input()
  multipleFiles: boolean = false;

  @Input()
  nodeType: string = 'cm:content'

  @Input()
  rootFolderId: string = '-root-';

  @Input()
  staticTitle: string = undefined;

  @Input()
  tooltip: string = null;

  @Input()
  uploadFolders: boolean = false;

  @Input()
  versioning: boolean = false;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onSuccess(event){
    console.log(event);
  }

  onUploadPermissionFailed(event: any) {
    this.notificationService.openSnackMessage(
        `You don't have the ${event.permission} permission to ${event.action} the ${event.type} `, 4000
    );
}
}
