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
  allowLeftSidebar: boolean;

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

  @Input()
  nodeId: string;

  @Input()
  showDocumentList: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.blobFile = this.renderBlobFile ? this.http.get('./assets/texts/blob.txt', {responseType: 'blob'}) : null;
  }

  onPrintClick = () => window.alert(`Printing.`);

  onNavigateBeforeClick = () => {
    if(this.canNavigateBefore) window.alert(`Navigating backwards.`);
  }
  
  onNavigateNextClick = () => {
    if(this.canNavigateNext) window.alert(`Navigating forward.`);
  } 

  customAction = () => window.alert(`Custom action.`);

  //Set showViewer value to false on manual viewer clouser in order
  //to allow displaying file preview with document list 
  showViewerChange = () => this.showViewer = false;

  showPreview(event) {        
    if (event.value.entry.isFile) {
        this.showViewer = true;
        this.nodeId = event.value.entry.id;
    }
  }
  
}