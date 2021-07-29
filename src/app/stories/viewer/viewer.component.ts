import { Component, Input, OnInit } from '@angular/core';

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

  // Left sidebar is bugged
  // @Input()
  // allowLeftSidebar: boolean;

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

  constructor() { }

  ngOnInit(): void {
  }

}
