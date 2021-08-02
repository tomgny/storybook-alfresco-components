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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.blobFile = this.renderBlobFile ? this.http.get('./assets/texts/blob.txt', {responseType: 'blob'}) : null;
  }

  onPrintClick = () => window.alert(`Printing.`);

  onNavigateBeforeClick = () => window.alert(`Navigating backwards.`);
  
  onNavigateNextClick = () => window.alert(`Navigating forward.`);

  customAction = () => window.alert(`Custom action.`);
  
}
