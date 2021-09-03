import { LoginDialogComponentData } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { LoginDialogComponent as LoginDialogComponentAdf } from '@alfresco/adf-core';

@Component({
  selector: 'aca-login-dialog',
  templateUrl: './login-dialog.component.html'
})
export class LoginDialogComponent implements OnInit {
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

    this.dialog.open(LoginDialogComponentAdf, {
      data,
      panelClass: 'adf-login-dialog',
      width: '630px'
    });

    data.logged.subscribe(
      () => {
        // Action after being logged in...
        alert('Success!');
      },
      (error) => {
        //your error handling
        alert(error);
      },
      () => {
        //action called when an action or cancel is clicked on the dialog
        this.dialog.closeAll();
      }
    );
  }

  ngOnInit(): void {}
}
