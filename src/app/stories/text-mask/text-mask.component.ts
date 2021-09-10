import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-text-mask',
  templateUrl: './text-mask.component.html',
  styleUrls: ['./text-mask.component.scss']
})
export class TextMaskComponent implements OnInit {
  @Input()
  inputMask: { mask: ''; isReverse: false };

  @Input()
  mask;

  @Input()
  isReversed;

  constructor() {}

  ngOnInit(): void {}
}
