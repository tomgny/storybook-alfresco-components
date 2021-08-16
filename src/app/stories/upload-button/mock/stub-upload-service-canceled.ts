import { EventEmitter } from '@angular/core';
import {  FileModel, FileUploadCompleteEvent, FileUploadDeleteEvent, FileUploadErrorEvent, FileUploadEvent, FileUploadStatus } from '@alfresco/adf-core';
import { Subject } from 'rxjs';
// const MIN_CANCELLABLE_FILE_SIZE = 1000000;
// const MAX_CANCELLABLE_FILE_PERCENTAGE = 50;

export class UploadServiceCanceledStub{
  private cache: { [key: string]: any } = {};
    // private totalComplete: number = 0;
    // private totalAborted: number = 0;
    // private totalError: number = 0;
    // private excludedFileList: string[] = [];
    // private excludedFoldersList: string[] = [];
    // private matchingOptions: any = null;
    // private folderMatchingOptions: any = null;
    // private abortedFile: string;
    private isThumbnailGenerationEnabled: boolean;

    activeTask: Promise<any> = null;
    queue: FileModel[] = [];

    queueChanged: Subject<FileModel[]> = new Subject<FileModel[]>();
    fileUpload: Subject<FileUploadEvent> = new Subject<FileUploadEvent>();
    fileUploadStarting: Subject<FileUploadEvent> = new Subject<
        FileUploadEvent
    >();
    fileUploadCancelled: Subject<FileUploadEvent> = new Subject<
        FileUploadEvent
    >();
    fileUploadProgress: Subject<FileUploadEvent> = new Subject<
        FileUploadEvent
    >();
    fileUploadAborted: Subject<FileUploadEvent> = new Subject<
        FileUploadEvent
    >();
    fileUploadError: Subject<FileUploadErrorEvent> = new Subject<
        FileUploadErrorEvent
    >();
    fileUploadComplete: Subject<FileUploadCompleteEvent> = new Subject<
        FileUploadCompleteEvent
    >();
    fileUploadDeleted: Subject<FileUploadDeleteEvent> = new Subject<
        FileUploadDeleteEvent
    >();
    fileDeleted: Subject<string> = new Subject<string>();


    // apiService = new AlfrescoApiServiceStub();
    // constructor(
    //     private appConfigService: AppConfigService,
    //     private discoveryApiService: DiscoveryApiService) {

    //     this.discoveryApiService.ecmProductInfo$.pipe(filter(info => !!info))
    //         .subscribe(({ status }) => {
    //             this.isThumbnailGenerationEnabled = status.isThumbnailGenerationEnabled;
    //         });
    // }

    /**
     * Checks whether the service still has files uploading or awaiting upload.
     * @returns True if files in the queue are still uploading, false otherwise
     */
    isUploading(): boolean {
      console.log('isUploading');
        const finishedFileStates = [FileUploadStatus.Complete, FileUploadStatus.Cancelled, FileUploadStatus.Aborted, FileUploadStatus.Error, FileUploadStatus.Deleted];
        return this.queue.reduce((stillUploading: boolean, currentFile: FileModel) => {
            return stillUploading || finishedFileStates.indexOf(currentFile.status) === -1;
        }, false);
    }

    getInstance() {
      return this;
    }

    /**
     * Gets the file Queue
     * @returns Array of files that form the queue
     */
    getQueue(): FileModel[] {
      console.log('getQuquq');
        return this.queue;
    }

    /**
     * Adds files to the uploading queue to be uploaded
     * @param files One or more separate parameters or an array of files to queue
     * @returns Array of files that were not blocked from upload by the ignore list
     */
    addToQueue(...files: FileModel[]): FileModel[] {
        console.log('addToQuquq');

        const allowedFiles = files.filter((currentFile) =>
            this.filterElement(currentFile)
        );
        this.queue = this.queue.concat(allowedFiles);
        this.queueChanged.next(this.queue);
        return allowedFiles;
    }

    private filterElement(_file: FileModel) {
        console.log('filterElement');

        // this.excludedFileList = <string[]> this.appConfigService.get('files.excluded');
        // this.excludedFoldersList = <string[]> this.appConfigService.get('folders.excluded');
        // let isAllowed = true;

        // if (this.excludedFileList) {
        //     this.matchingOptions = this.appConfigService.get('files.match-options');
        //     isAllowed = this.isFileNameAllowed(file);
        // }

        // if (isAllowed && this.excludedFoldersList) {
        //     this.folderMatchingOptions = this.appConfigService.get('folders.match-options');
        //     isAllowed = this.isParentFolderAllowed(file);
        // }
        // return isAllowed;
        return true;
    }

    // private isParentFolderAllowed(file: FileModel): boolean {
    //     let isAllowed: boolean = true;
    //     const currentFile: any = file.file;
    //     const fileRelativePath = currentFile.webkitRelativePath ? currentFile.webkitRelativePath : file.options.path;
    //     if (currentFile && fileRelativePath) {
    //         isAllowed =
    //             this.excludedFoldersList.filter((folderToExclude) => {
    //                 return fileRelativePath
    //                     .split('/')
    //                     .some((pathElement) => {
    //                         const minimatch = new Minimatch(folderToExclude, this.folderMatchingOptions);
    //                         return minimatch.match(pathElement);
    //                     });
    //             }).length === 0;
    //     }
    //     return isAllowed;
    //     return true;
    // }

    // private isFileNameAllowed(file: FileModel): boolean {
    //     return (
    //         this.excludedFileList.filter((pattern) => {
    //             const minimatch = new Minimatch(pattern, this.matchingOptions);
    //             return minimatch.match(file.name);
    //         }).length === 0
    //     );
    //     return true;
    // }

    /**
     * Finds all the files in the queue that are not yet uploaded and uploads them into the directory folder.
     * @param successEmitter Emitter to invoke on file success status change
     * @param errorEmitter Emitter to invoke on file error status change
     */
    uploadFilesInTheQueue(successEmitter?: EventEmitter<any>, errorEmitter?: EventEmitter<any>): void {
        console.log('uploadFilesInQuquq');

        if (!this.activeTask) {
            const file = this.queue.find(
                (currentFile) => currentFile.status === FileUploadStatus.Pending
            );
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
        console.log('cancelUpload');

        files.forEach((file) => {
          this.onUploadCancelled(file);
            // const promise = this.cache[file.name];
            // if (promise) {
            //     if (this.isSaveToAbortFile(file)) {
            //         //promise.abort();
            //     }
            //     // this.abortedFile = file.name;
            //     delete this.cache[file.name];
            //     promise.next();
            //     this.onUploadCancelled(file);
            // } else {
            //     //const performAction = this.getAction(file);
            //     //performAction();

            // }
        });
    }

    /** Clears the upload queue */
    clearQueue() {
        console.log('clearQueue');

        this.queue = [];
        // this.totalComplete = 0;
        // this.totalAborted = 0;
        // this.totalError = 0;
    }

    /**
     * Gets an upload promise for a file.
     * @param file The target file
     * @returns Promise that is resolved if the upload is successful or error otherwise
     */
    getUploadPromise(file: FileModel): any {
        console.log('getUploadPromise');

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

        // if (file.id) {
        //     return this.apiService
        //         .getInstance()
        //         .node.updateNodeContent(file.id, file.file, opts);
        // } else {
        //     return this.apiService
        //         .getInstance()
        //         .upload.uploadFile(
        //             file.file,
        //             file.options.path,
        //             file.options.parentId,
        //             file.options,
        //             opts
        //         );
        // }
    }

    private beginUpload(file: FileModel, _successEmitter?: EventEmitter<any>, _errorEmitter?: EventEmitter<any>): any {
        console.log('BEFORE ERROR');


        console.log(file);

        const promise = this.getUploadPromise(file);
        console.log(promise);
        //this.onUploadComplete(file, mockNodeEntry);
        //successEmitter.emit({'Success!': 'Succ'})
        //this.onUploadError(file, undefined);
        //errorEmitter.emit({'Error!': 'Err'})
        this.onUploadCancelled(file);
        //this.onUploadDeleted(file);
        //starting
        //this.onUploadStarting(file);
        //progress
        //this.onUploadProgress
        //aborted
        //this.onUploadAborted
        /*
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
            .on('success', (data) => {
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
            })
            .catch(() => {});
          */
        return promise;
    }

    private onUploadStarting(file: FileModel): void {
        console.log('onUploadStarting');
        if (file) {
            file.status = FileUploadStatus.Starting;
            const event = new FileUploadEvent(file, FileUploadStatus.Starting);
            this.fileUpload.next(event);
            this.fileUploadStarting.next(event);
        }
    }

    // private onUploadProgress(
    //     file: FileModel,
    //     progress: FileUploadProgress
    // ): void {
    //   console.log('onUploadProgress');
    //     if (file) {
    //         file.progress = progress;
    //         file.status = FileUploadStatus.Progress;

    //         const event = new FileUploadEvent(file, FileUploadStatus.Progress);
    //         this.fileUpload.next(event);
    //         this.fileUploadProgress.next(event);
    //     }
    // }

    // private onUploadError(file: FileModel, error: any): void {
    //   console.log('onUploadError');
    //     if (file) {
    //         file.errorCode = (error || {}).status;
    //         file.status = FileUploadStatus.Error;
    //         this.totalError++;

    //         const promise = this.cache[file.name];
    //         if (promise) {
    //             delete this.cache[file.name];
    //         }

    //         const event = new FileUploadErrorEvent(
    //             file,
    //             error,
    //             this.totalError
    //         );
    //         this.fileUpload.next(event);
    //         this.fileUploadError.next(event);
    //     }
    // }
/*
    private onUploadComplete(file: FileModel, data: any): void {
      console.log('onUploadComplete');
      fakeNodePaging.list.entries.push(mockNodeEntry);
        if (file) {
            file.status = FileUploadStatus.Complete;
            file.data = data;
            this.totalComplete++;
            const promise = this.cache[file.name];
            if (promise) {
                delete this.cache[file.name];
            }

            const event = new FileUploadCompleteEvent(
                file,
                this.totalComplete,
                data,
                this.totalAborted
            );
            this.fileUpload.next(event);
            this.fileUploadComplete.next(event);
        }
    }
*/
    // private onUploadAborted(file: FileModel): void {
    //   console.log('onUploadAborted');
    //     if (file) {
    //         file.status = FileUploadStatus.Aborted;
    //         this.totalAborted++;

    //         const event = new FileUploadEvent(file, FileUploadStatus.Aborted);
    //         this.fileUpload.next(event);
    //         this.fileUploadAborted.next(event);
    //     }
    // }

    private onUploadCancelled(file: FileModel): void {
      console.log('onUploadCanceled');
        if (file) {
            file.status = FileUploadStatus.Cancelled;

            const event = new FileUploadEvent(file, FileUploadStatus.Cancelled);
            this.fileUpload.next(event);
            this.fileUploadCancelled.next(event);
        }
    }

    // private onUploadDeleted(file: FileModel): void {
    //   console.log('onUploadDeleted');
    //     if (file) {
    //         file.status = FileUploadStatus.Deleted;
    //         this.totalComplete--;

    //         const event = new FileUploadDeleteEvent(file, this.totalComplete);
    //         this.fileUpload.next(event);
    //         this.fileUploadDeleted.next(event);
    //     }
    // }

    // private getAction(file: FileModel) {
    //   console.log('getAction');
    //     const actions = {
    //         [FileUploadStatus.Pending]: () => this.onUploadCancelled(file),
    //         [FileUploadStatus.Deleted]: () => this.onUploadDeleted(file),
    //         [FileUploadStatus.Error]: () => this.onUploadError(file, null)
    //     };

    //     return actions[file.status];
    // }

    // private deleteAbortedNode(_nodeId: string) {
    //   console.log('deleteAbortedNode');
    //     // this.apiService
    //     //     .getInstance()
    //     //     .core.nodesApi.deleteNode(nodeId, { permanent: true })
    //     //     .then(() => (this.abortedFile = undefined));
    // }

    // private deleteAbortedNodeVersion(_nodeId: string, _versionId: string) {
    //   console.log('deleteAbortednodeVersion');
    //     // this.apiService
    //     //     .getInstance()
    //     //     .core.versionsApi.deleteVersion(nodeId, versionId)
    //     //     .then(() => (this.abortedFile = undefined));
    // }

    // private isSaveToAbortFile(_file: FileModel): boolean {
    //   console.log('isSaveToAbortFile');
    //     // return (
    //     //     file.size > MIN_CANCELLABLE_FILE_SIZE &&
    //     //     file.progress.percent < MAX_CANCELLABLE_FILE_PERCENTAGE
    //     // );
    //     return true;
    // }
}
