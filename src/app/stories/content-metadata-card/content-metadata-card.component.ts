import { Node } from '@alfresco/js-api';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-content-metadata-card',
  templateUrl: './content-metadata-card.component.html',
  styleUrls: ['./content-metadata-card.component.scss']
})
export class ContentMetadataCardComponent implements OnInit {

  @Input()
  node: Node;

  constructor() { }

  ngOnInit(): void {
  }

}
