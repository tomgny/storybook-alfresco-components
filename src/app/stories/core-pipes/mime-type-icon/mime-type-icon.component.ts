import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-mime-type-icon',
  templateUrl: './mime-type-icon.component.html',
  styleUrls: ['../core-pipes.component.scss']
})
export class MimeTypeIconComponent implements OnInit {
  @Input()
  icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
