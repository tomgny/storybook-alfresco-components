import { EventEmitter } from '@angular/core';
import { FileModel, FileUploadCompleteEvent, FileUploadDeleteEvent, FileUploadErrorEvent, FileUploadEvent, FileUploadProgress, FileUploadStatus } from '@alfresco/adf-core';
import { Subject } from 'rxjs';

export class UploadServiceProgressStub {
  private cache: { [key: string]: any } = {};
  private isThumbnailGenerationEnabled: boolean;

  activeTask: Promise<any> = null;
  queue: FileModel[] = [];
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

  getInstance() {
    return this;
  }

  /**
   * Gets the file Queue
   * @returns Array of files that form the queue
   */
  getQueue(): FileModel[] {
    return this.queue;
  }

  /**
   * Adds files to the uploading queue to be uploaded
   * @param files One or more separate parameters or an array of files to queue
   * @returns Array of files that were not blocked from upload by the ignore list
   */
  addToQueue(...files: FileModel[]): FileModel[] {
    const allowedFiles = files.filter((currentFile) => this.filterElement(currentFile));
    this.queue = this.queue.concat(allowedFiles);
    this.queueChanged.next(this.queue);
    return allowedFiles;
  }

  private filterElement(_file: FileModel) {
    return true;
  }

  /**
   * Finds all the files in the queue that are not yet uploaded and uploads them into the directory folder.
   * @param successEmitter Emitter to invoke on file success status change
   * @param errorEmitter Emitter to invoke on file error status change
   */
  uploadFilesInTheQueue(successEmitter?: EventEmitter<any>, errorEmitter?: EventEmitter<any>): void {
    if (!this.activeTask) {
      const file = this.queue.find((currentFile) => currentFile.status === FileUploadStatus.Pending);
      if (file) {
        this.onUploadStarting(file);
        const promise = this.beginUpload(file, successEmitter, errorEmitter);
        this.activeTask = promise;
        this.cache[file.name] = promise;
        const next = () => {
          this.activeTask = null;
          setTimeout(() => this.uploadFilesInTheQueue(successEmitter, errorEmitter), 100);
        };

        promise.next = next;
        promise.then(
          () => next(),
          () => next()
        );
      }
    }
  }

  /**
   * Cancels uploading of files.
   * If the file is smaller than 1 MB the file will be uploaded and then the node deleted
   * to prevent having files that were aborted but still uploaded.
   * @param files One or more separate parameters or an array of files specifying uploads to cancel
   */
  cancelUpload(...files: FileModel[]) {
    files.forEach((file) => {
      this.onUploadCancelled(file);
    });
  }

  /** Clears the upload queue */
  clearQueue() {
    this.queue = [];
  }

  /**
   * Gets an upload promise for a file.
   * @param file The target file
   * @returns Promise that is resolved if the upload is successful or error otherwise
   */
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

    return Promise.resolve();
  }

  private beginUpload(file: FileModel, _successEmitter?: EventEmitter<any>, _errorEmitter?: EventEmitter<any>): any {
    const promise = this.getUploadPromise(file);
    this.onUploadProgress(file, { loaded: 2120713, total: 4241426, percent: 50 });
    return promise;
  }

  private onUploadStarting(file: FileModel): void {
    if (file) {
      file.status = FileUploadStatus.Starting;
      const event = new FileUploadEvent(file, FileUploadStatus.Starting);
      this.fileUpload.next(event);
      this.fileUploadStarting.next(event);
    }
  }

  private onUploadProgress(file: FileModel, progress: FileUploadProgress): void {
    if (file) {
      file.progress = progress;
      file.status = FileUploadStatus.Progress;
      const event = new FileUploadEvent(file, FileUploadStatus.Progress);
      this.fileUpload.next(event);
      this.fileUploadProgress.next(event);
    }
  }

  private onUploadCancelled(file: FileModel): void {
    if (file) {
      file.status = FileUploadStatus.Cancelled;
      const event = new FileUploadEvent(file, FileUploadStatus.Cancelled);
      this.fileUpload.next(event);
      this.fileUploadCancelled.next(event);
    }
  }
}
