import { CoreModule } from '@alfresco/adf-core';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'aca-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  /**
   * Background color for the header. It can be any hex color code or one of the Material theme colors: 'primary', 'accent' or 'warn'.
   */
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';

  /**
   * expandedSidenav: Toggles the expanded state of the component.
   */
  @Input()
  expandedSidenav: boolean = true;

  /**
   * Path to an image file for the application logo.
   */
  @Input()
  logo: string = undefined;

  /**
   * The side of the page that the drawer is attached to (can be 'start' or 'end')
   */
  @Input()
  position: 'start' | 'end' = 'start';

  /**
   * The router link for the application logo, when clicked.
   */
  @Input()
  redirectUrl: string | any[] = '/';

  /**
   * Toggles whether the sidenav button will be displayed in the header or not.
   */
  @Input()
  showSidenavToggle: boolean = true;

  /**
   * Title of the application.
   */
  @Input()
  title: string = undefined;

  /**
   * The tooltip text for the application logo.
   */
  @Input()
  tooltip: string = undefined;

  @Input()
  optionalContent: boolean = false;

  @Input()
  showRedirect: boolean = false;

  onSidenavClick() {
    this.expandedSidenav = !this.expandedSidenav;
  }

  links = ['Link 1', 'Link 2', 'Link 3', 'Link 4', 'Link 5'];
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [CoreModule.forChild()],
  exports: [HeaderComponent]
})
export class HeaderModule {}
