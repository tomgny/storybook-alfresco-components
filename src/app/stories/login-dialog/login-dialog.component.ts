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
  @Input()
  title: string;

  @Input()
  actionName: string;

  constructor(private dialog: MatDialog) {}

  openLoginDialog() {
    const data: LoginDialogComponentData = {
      title: this.title,
      actionName: this.actionName,
      logged: new Subject<any>()
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
