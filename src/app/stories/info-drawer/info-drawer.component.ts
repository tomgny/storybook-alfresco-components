import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-info-drawer',
  templateUrl: './info-drawer.component.html',
  styleUrls: ['./info-drawer.component.scss']
})
export class InfoDrawerComponent implements OnInit {
  @Input()
  showHeader: boolean;

  @Input()
  selectedIndex: number;

  @Input()
  title: string;

  @Input()
  label1: string;

  @Input()
  label2: string;

  @Input()
  icon1: string;

  @Input()
  icon2: string;

  onTabChange(event) {
    console.log(event);
  }

  onClick() {
    alert('You would close this window.');
  }

  constructor() {}

  ngOnInit(): void {}
}
