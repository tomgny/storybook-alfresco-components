import { Component } from '@angular/core';

@Component({
  selector: 'aca-login-dialog-panel',
  templateUrl: './login-dialog-panel.component.html'
})
export class LoginDialogPanelComponent {
  onSuccess(_) {
    alert('Success!');
  }
}
