import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class TextHighlightComponent implements OnInit {
  @Input()
  summary: string;

  @Input()
  rudeWordList: string;

  constructor() { }

  ngOnInit(): void {
  }

}
