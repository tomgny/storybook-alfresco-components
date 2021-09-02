import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-info-drawer',
  templateUrl: './info-drawer.component.html',
  styleUrls: ['./info-drawer.component.scss']
})
export class InfoDrawerComponent {
  /**
   * The visibility of the header.
   */
  @Input()
  showHeader: boolean;

  /**
   * The selected index tab.
   */
  @Input()
  selectedIndex: number;

  /**
   * The title of the info drawer (string or translation key).
   */
  @Input()
  title: string;

  /**
   * The title of the first tab (string or translation key).
   */
  @Input()
  label1: string;

  /**
   * The title of the second tab (string or translation key).
   */
  @Input()
  label2: string;

  /**
   * Icon to render for the first tab.
   */
  @Input()
  icon1: string;

  /**
   * Icon to render for the second tab.
   */
  @Input()
  icon2: string;

  @Input()
  showSecondTab: boolean;

  @Input()
  showThirdTab: boolean = false;

  @Input()
  tab1Text: string;

  @Input()
  tab2Text: string;

  /**
   * Called when the currently active tab changes.
   * @param _ 
   */
  onTabChange(_: any) {}

  onClick() {
    alert('You would close this window.');
  }
}
