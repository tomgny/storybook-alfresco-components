import { DownloadEntry } from '@alfresco/js-api';

export const zipNode = {
  entry: {
    name: 'files.zip',
    contentUrl: './assets/files.zip',
    id: 'files_in_zip'
  }
};

export const downloadEntry: DownloadEntry = {
  entry: {
    id: 'entryId',
    status: 'DONE'
  }
};
