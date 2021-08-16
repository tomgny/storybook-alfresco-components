import { PermissionModel, UploadFilesEvent } from '@alfresco/adf-content-services';
import {  NotificationService } from '@alfresco/adf-core';
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
  nodeType: string = 'cm:content';

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

  @Input()
  fakeSuccess: boolean = true;

  fakeError: boolean = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
  }

  onSuccess(event: any) {
    console.log('onSuccess');
    console.log(event);
  }

  onError(event: any) {
    console.log('onError');
    console.log(event);
  }

  onBeginUpload(event: UploadFilesEvent) {
    console.log('onBeginUpload');
    console.log(event.files);
  }

  onUpdateFileVersion(event: any) {
    console.log('onUpdateFileVersion');
    console.log(event);
  }

  onUploadPermissionFailed(event: PermissionModel) {
    // this.notificationService.openSnackMessage(
    //     `You don't have the ${event.permission} permission to ${event.action} the ${event.type} `, 4000
    // );
    this.notificationService.showError('PERMISSION.LACKOF', null, {
      permission: event.permission,
      action: event.action,
      type: event.type
    });
    console.log(event.permission);
    console.log(event.type);
    console.log(event.action);
  }
}
