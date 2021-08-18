import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'aca-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  /**
   * If true then show the Viewer as a full page over the current content. Otherwise fit inside the parent div.
   */
  @Input()
  overlayMode: boolean;

  /**
   * If you want to load an external file that does not come from ACS you can use this URL to specify where to load the file from.
   */
  @Input()
  urlFile: string;

  /**
   * Toggles PDF thumbnails.
   */
  @Input()
  allowThumbnails: boolean;

  /**
   * Toggles downloading.
   */
  @Input()
  allowDownload: boolean;

  /**
   * Toggles the Full Screen feature.
   */
  @Input()
  allowFullScreen: boolean;

  /**
   * Toggles printing.
   */
  @Input()
  allowPrint: boolean;

  /**
   * Hide or show the toolbar
   */
  @Input()
  showToolbar: boolean;

  /**
   * Hide or show the viewer
   */
  @Input()
  showViewer: boolean;

  /**
   * Allow the right sidebar.
   */
  @Input()
  allowRightSidebar: boolean;

  /**
   * Allow the left the sidebar.
   */
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

  /**
   * Specifies the name of the file when it is not available from the URL.
   */
  @Input()
  displayName: string;

  /**
   * Allows back navigation.
   */
  @Input()
  allowGoBack: boolean;

  @Input()
  displayCustomThumbnails: boolean;

  @Input()
  renderBlobFile: boolean;

  /**
   * Loads a Blob File.
   */
  @Input()
  blobFile: Observable<Blob>;

  /**
   * MIME type of the file content (when not determined by the filename extension).
   */
  @Input()
  mimeType: string;

  /**
   * Toggles before/next navigation. You can use the arrow buttons to navigate between documents in the collection.
   */
  @Input()
  allowNavigate: boolean;

  /**
   * Toggles the next (">") button. Requires allowNavigate to be enabled.
   */
  @Input()
  canNavigateNext: boolean;

  /**
   * Toggles the "before" ("<") button. Requires allowNavigate to be enabled.
   */
  @Input()
  canNavigateBefore: boolean;

  /**
   * Node Id of the file to load.
   */
  @Input()
  nodeId: string;

  @Input()
  showDocumentList: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.blobFile = this.renderBlobFile ? this.http.get('./assets/texts/blob.txt', { responseType: 'blob' }) : null;
  }

  onPrintClick = () => window.alert(`Printing.`);

  onNavigateBeforeClick = () => {
    if (this.canNavigateBefore) window.alert(`Navigating backwards.`);
  };

  onNavigateNextClick = () => {
    if (this.canNavigateNext) window.alert(`Navigating forward.`);
  };

  customAction = () => window.alert(`Custom action.`);

  //Set showViewer value to false on manual viewer clouser in order
  //to allow displaying file preview with document list
  showViewerChange = () => (this.showViewer = false);

  showPreview(event) {
    if (event.value.entry.isFile) {
      this.showViewer = true;
      this.nodeId = event.value.entry.id;
    }
  }
}
