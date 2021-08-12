import { FileModel, FileUploadCompleteEvent, FileUploadDeleteEvent, FileUploadErrorEvent, FileUploadEvent, FileUploadProgress, FileUploadStatus } from '@alfresco/adf-core';
import { EventEmitter } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { ContentApiStub, NodesApiStub } from './stub-apis';

export class AuthenticationServiceStub {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

  isLoggedIn = () => true;

  isOauth = () => true;

  isEcmLoggedIn = () => true;
}

export class AlfrescoApiServiceStub {
  nodesApi = new NodesApiStub();

  nodes = this.nodesApi;

  contentApi = new ContentApiStub();

  nodeUpdated = new Subject<Node>();

  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  load() {}

  getInstance = () => this;
}

export class UploadServiceStub {
  cache: { [key: string]: any } = {};
  totalComplete: number = 0;
  totalAborted: number = 0;
  totalError: number = 0;
  queue: FileModel[] = [];
  isThumbnailGenerationEnabled: boolean;

  queueChanged: Subject<FileModel[]> = new Subject<FileModel[]>();
  fileUpload: Subject<FileUploadEvent> = new Subject<FileUploadEvent>();
  fileUploadStarting: Subject<FileUploadEvent> = new Subject<FileUploadEvent>();
  fileUploadCancelled: Subject<FileUploadEvent> = new Subject<FileUploadEvent>();
  fileUploadProgress: Subject<FileUploadEvent> = new Subject<FileUploadEvent>();
  fileUploadAborted: Subject<FileUploadEvent> = new Subject<FileUploadEvent>();
  fileUploadError: Subject<FileUploadErrorEvent> = new Subject<FileUploadErrorEvent>();
  fileUploadComplete: Subject<FileUploadCompleteEvent> = new Subject<FileUploadCompleteEvent>();
  fileUploadDeleted: Subject<FileUploadDeleteEvent> = new Subject<FileUploadDeleteEvent>();
  fileDeleted: Subject<string> = new Subject<string>();

  getUploadPromise(file: FileModel): any {
    const opts: any = {
        include: ['allowableOperations']
    };

    if (this.isThumbnailGenerationEnabled) {
        opts.renditions = 'doclib';
    }

    if (file.options.newVersion === true) {
        opts.overwrite = true;
        opts.majorVersion = file.options.majorVersion;
        opts.comment = file.options.comment;
        opts.name = file.name;
    } else {
        opts.autoRename = true;
    }

    if (file.options.nodeType) {
        opts.nodeType = file.options.nodeType;
    }

    /*
    if (file.id) {
        return this.apiService
            .getInstance()
            .node.updateNodeContent(file.id, file.file, opts);
    } else {
        return this.apiService
            .getInstance()
            .upload.uploadFile(
                file.file,
                file.options.path,
                file.options.parentId,
                file.options,
                opts
            );
    }
    */
}

onUploadStarting(file: FileModel): void {
  if (file) {
      file.status = FileUploadStatus.Starting;
      const event = new FileUploadEvent(file, FileUploadStatus.Starting);
      this.fileUpload.next(event);
      this.fileUploadStarting.next(event);
  }
}

onUploadProgress(
  file: FileModel,
  progress: FileUploadProgress
): void {
  if (file) {
      file.progress = progress;
      file.status = FileUploadStatus.Progress;

      const event = new FileUploadEvent(file, FileUploadStatus.Progress);
      this.fileUpload.next(event);
      this.fileUploadProgress.next(event);
  }
}

onUploadError(file: FileModel, error: any): void {
  if (file) {
      file.errorCode = (error || {}).status;
      file.status = FileUploadStatus.Error;
      this.totalError++;

      const promise = this.cache[file.name];
      if (promise) {
          delete this.cache[file.name];
      }

      const event = new FileUploadErrorEvent(
          file,
          error,
          this.totalError
      );
      this.fileUpload.next(event);
      this.fileUploadError.next(event);
  }
}

onUploadAborted(file: FileModel): void {
  if (file) {
      file.status = FileUploadStatus.Aborted;
      this.totalAborted++;

      const event = new FileUploadEvent(file, FileUploadStatus.Aborted);
      this.fileUpload.next(event);
      this.fileUploadAborted.next(event);
  }
}

beginUpload(file: FileModel, successEmitter?: EventEmitter<any>, errorEmitter?: EventEmitter<any>): any {
    const promise = this.getUploadPromise(file);
    promise
        .on('progress', (progress: FileUploadProgress) => {
            this.onUploadProgress(file, progress);
        })
        .on('abort', () => {
            this.onUploadAborted(file);
            if (successEmitter) {
                successEmitter.emit({ value: 'File aborted' });
            }
        })
        .on('error', (err) => {
            this.onUploadError(file, err);
            if (errorEmitter) {
                errorEmitter.emit({ value: 'Error file uploaded' });
            }
        })
        .on('success', (_data) => {
          /*
            if (this.abortedFile === file.name) {
                this.onUploadAborted(file);
                if (file.id === undefined) {
                    this.deleteAbortedNode(data.entry.id);
                } else {
                    this.deleteAbortedNodeVersion(data.entry.id, data.entry.properties['cm:versionLabel']);
                }
                if (successEmitter) {
                    successEmitter.emit({ value: 'File deleted' });
                }
            } else {
                this.onUploadComplete(file, data);
                if (successEmitter) {
                    successEmitter.emit({ value: data });
                }
            }
            */
           console.log('SUCCESS UPLOAD!');

        })
        .catch(() => {});

    return promise;
}

  addToQueue() {}

  uploadFilesInTheQueue() {}

  clearQueue(){
    this.queue = [];
  }
}
