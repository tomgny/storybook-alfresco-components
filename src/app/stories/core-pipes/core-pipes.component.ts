import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-core-pipes',
  templateUrl: './core-pipes.component.html',
  styleUrls: ['./core-pipes.component.scss']
})
export class CorePipesComponent implements OnInit {

  @Input()
  showTimeAgo: boolean = false;

  @Input()
  date: Date;

  textForDate: string;

  constructor() { }

  ngOnInit(): void {
    this.textForDate = this.getStringBasedOnDate(this.date)
  }

  private getStringBasedOnDate(date: Date) {
    return date < new Date() ? 'Last modified:' : 'Holiday:'
  }

}
