import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-format-space',
  templateUrl: './format-space.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class FormatSpaceComponent implements OnInit {
  @Input()
  textToFormat: string;

  @Input()
  replaceChar: string = '_';

  @Input()
  lowercase: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
