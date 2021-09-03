import { LoginDialogComponentData } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { LoginDialogComponent as LoginDialogComponentAdf } from '@alfresco/adf-core';

@Component({
  selector: 'aca-login-dialog',
  templateUrl: './login-dialog.component.html'
})
export class LoginDialogComponent {
  /**
   * Dialog title.
   */
  @Input()
  title: string;

  /**
   * Key from translation files (i18n) whose value will appear on the dialog s main action button. Path to key: `LOGIN.DIALOG.key`. Fallback key is CHOOSE.
   */
  @Input()
  actionName: string;

  /**
   * Event emitted when the login succeeds.
   */
  @Input()
  logged: Subject<any>;

  constructor(private dialog: MatDialog) {}

  openLoginDialog() {
    const data: LoginDialogComponentData = {
      title: this.title,
      actionName: this.actionName,
      logged: this.logged
    };

    this.dialog.open(LoginDialogComponentAdf, { data });

    data.logged.subscribe(
      () => {
        alert('Success!');
      },
      (error) => {
        alert(error);
      },
      () => {
        this.dialog.closeAll();
      }
    );
  }
}
