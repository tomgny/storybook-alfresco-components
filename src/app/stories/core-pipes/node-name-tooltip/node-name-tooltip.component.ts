import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-node-name-tooltip',
  templateUrl: './node-name-tooltip.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class NodeNameTooltipComponent implements OnInit {
  @Input()
  nodeName: string;

  @Input()
  nodeTitle: string;

  @Input()
  nodeDescription: string;

  node: any;

  constructor() {}

  ngOnInit(): void {
    this.node = {
      entry: {
        name: this.nodeName,
        properties: {
          'cm:title': this.nodeTitle,
          'cm:description': this.nodeDescription
        }
      }
    };
  }
}
