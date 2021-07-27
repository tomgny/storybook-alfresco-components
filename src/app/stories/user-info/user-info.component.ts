import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'aca-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserInfoComponent implements OnInit {

  @Input()
  bpmBackgroundImage: string;

  @Input()
  ecmBackgroundImage: string;

  @Input()
  menuPositionX: MenuPositionX = "after"

  @Input()
  menuPositionY: MenuPositionY = "below"

  @Input()
  namePosition: string = "right";

  @Input()
  showName: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
