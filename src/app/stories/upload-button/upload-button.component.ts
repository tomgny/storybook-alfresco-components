import { PermissionModel, UploadFilesEvent } from '@alfresco/adf-content-services';
import { NotificationService } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-upload-button',
  templateUrl: './upload-button.component.html'
})
export class UploadButtonComponent implements OnInit {
  /**
   * Filter for accepted file types.
   */
  @Input()
  acceptedFilesType: string = '*';

  /**
   * When you overwrite existing content, you can use the comment
   * field to add a version comment that appears in the version history
   */
  @Input()
  comment: string = undefined;

  /**
   * Toggles component disabled state (if there is no node permission checking).
   */
  @Input()
  disabled: boolean = false;

  /**
   * Custom added file. The upload button type will be 'button' instead of 'file'
   */
  @Input()
  file: File = undefined;

  /**
   * majorVersion boolean field to true to indicate a major version should be created.
   */
  @Input()
  majorVersion: boolean = false;

  /**
   * Sets a limit on the maximum size (in bytes) of a file to be uploaded. Has no effect if undefined.
   */
  @Input()
  maxFilesSize: number = undefined;

  /**
   * Allows/disallows multiple files
   */
  @Input()
  multipleFiles: boolean = false;

  /**
   * Custom node type for uploaded file
   */
  @Input()
  nodeType: string = 'cm:content';

  /**
   * The ID of the root. Use the nodeId for Content Services or the taskId/processId for Process Services.
   */
  @Input()
  rootFolderId: string = '-root-';

  /**
   * Defines the text of the upload button.
   */
  @Input()
  staticTitle: string = undefined;

  /**
   * Custom tooltip text.
   */
  @Input()
  tooltip: string = null;

  /**
   * Allows/disallows upload folders (only for Chrome).
   */
  @Input()
  uploadFolders: boolean = false;

  /**
   * Toggles versioning.
   */
  @Input()
  versioning: boolean = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {}

  onSuccess(event: any) {
    console.log(event);
  }

  onError(event: any) {
    console.log(event);
  }

  onBeginUpload(event: UploadFilesEvent) {
    console.log(event);
  }

  onUpdateFileVersion(event: any) {
    console.log(event);
  }

  onUploadPermissionFailed(event: PermissionModel) {
    this.notificationService.showError('PERMISSION.LACKOF', null, {
      permission: event.permission,
      action: event.action,
      type: event.type
    });
  }
}
