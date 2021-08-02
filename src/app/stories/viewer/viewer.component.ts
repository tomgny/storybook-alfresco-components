// import { NodesApiService } from '@alfresco/adf-core';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'aca-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input()
  overlayMode: boolean;

  @Input()
  urlFile: string;

  @Input()
  allowThumbnails: boolean;

  @Input()
  allowDownload: boolean;

  @Input()
  allowFullScreen: boolean;

  @Input()
  allowPrint: boolean;

  @Input()
  showToolbar: boolean;

  @Input()
  showViewer: boolean;

  @Input()
  allowRightSidebar: boolean;

  @Input()
  displayCustomToolbar: boolean;

  @Input()
  displayMoreToolbarActions: boolean;

  @Input()
  displayMoreActionsMenu: boolean;

  @Input()
  displayOpenWith: boolean;

  @Input()
  displayName: string;

  @Input()
  allowGoBack: boolean;

  @Input()
  displayCustomThumbnails: boolean;

  @Input()
  renderBlobFile: boolean;

  @Input()
  blobFile: Observable<Blob>;

  @Input()
  mimeType: string;

  @Input()
  allowNavigate: boolean;

  @Input()
  canNavigateNext: boolean;

  @Input()
  canNavigateBefore: boolean;

  // @Input()
  // extendViewerWith3d: boolean;

  @Input()
  nodeId: string;

  mockNode1 = {
    'isFile': true,
    'createdByUser': { 'id': 'admin', 'displayName': 'Administrator' },
    'modifiedAt': '2017-05-24T15:08:55.640Z',
    'nodeType': 'cm:content',
    'content': {
        'mimeType': 'application/rtf',
        'mimeTypeName': 'Rich Text Format',
        'sizeInBytes': 14530,
        'encoding': 'UTF-8'
    },
    'parentId': 'd124de26-6ba0-4f40-8d98-4907da2d337a',
    'createdAt': '2017-05-24T15:08:55.640Z',
    'path': {
        'name': '/Company Home/Guest Home',
        'isComplete': true,
        'elements': [{
            'id': '94acfc73-7014-4475-9bd9-93a2162f0f8c',
            'name': 'Company Home'
        }, { 'id': 'd124de26-6ba0-4f40-8d98-4907da2d337a', 'name': 'Guest Home' }]
    },
    'isFolder': false,
    'modifiedByUser': { 'id': 'admin', 'displayName': 'Administrator' },
    'name': 'b_txt_file.rtf',
    'id': '70e1cc6a-6918-468a-b84a-1048093b06fd',
    'properties': { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
    'allowableOperations': ['delete', 'update']
};

  constructor(private http: HttpClient, /* private nodesApi: NodesApiService */) { }

  ngOnInit(): void {
      this.blobFile = this.renderBlobFile ? this.http.get('./assets/texts/blob.txt', {responseType: 'blob'}) : null;

      // try {
      //   this.nodesApi.createFolder('-root-', this.mockNode1)
      // } catch (err) {
      //   console.log(err);
        
      // }
  }

  onPrintClick = () => window.alert(`Printing.`);

  onNavigateBeforeClick = () => window.alert(`Navigating backwards.`);
  
  onNavigateNextClick = () => window.alert(`Navigating forward.`);

  customAction = () => window.alert(`Custom action.`);
  
}
