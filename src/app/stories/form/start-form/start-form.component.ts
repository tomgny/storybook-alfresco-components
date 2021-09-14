import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-start-form',
  templateUrl: './start-form.component.html'
})
export class StartFormComponent {
  /**
   * Definition ID of the process to start, this parameter can not be use in combination with processId
   */
  @Input()
  processDefinitionId: string;

  /**
   * Process ID of the process to start, this parameter can not be use in combination with processDefinitionId
   */
  @Input()
  processId: string;

  /**
   * Should form outcome buttons be shown?
   */
  @Input()
  showOutcomeButtons: boolean = true;

  /**
   * Should the refresh button be shown?
   */
  @Input()
  showRefreshButton: boolean = true;

  /**
   * Is the form read-only (ie, can't be edited)?
   */
  @Input()
  readOnlyForm: boolean = false;

  onFormCompleted(event) {
    window.alert(`Fake ${event}!`);
  }
}
