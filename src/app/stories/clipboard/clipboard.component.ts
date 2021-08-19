import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit {
  @Input()
  notify_message: string = 'Halo'

  constructor() { }

  ngOnInit(): void {
  }

}
