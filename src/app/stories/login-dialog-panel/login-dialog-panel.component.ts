import { Component } from '@angular/core';

@Component({
  selector: 'aca-login-dialog-panel',
  templateUrl: './login-dialog-panel.component.html',
  styleUrls: ['./login-dialog-panel.component.scss']
})
export class LoginDialogPanelComponent {
  onSuccess(_) {
    alert('You would be redirected to successful login landing page.');
  }
}
