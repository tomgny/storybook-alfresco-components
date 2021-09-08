import { FormBaseComponent, FormModel, FormOutcomeEvent, FormOutcomeModel, FormRenderingService, FormService, FormVariableModel } from '@alfresco/adf-core';
import { AttachFolderWidgetComponent } from '@alfresco/adf-process-services';
import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'aca-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {
  /**
   * Toggle debug options.
   */
  @Input()
  showDebugButton: boolean = false;

  @Input()
  formDefinition: FormModel;

  @Input()
  testDescription: string;

  @Input()
  showTestDescription: boolean = false;

  @Input()
  showFormVariables: boolean = false;

  debugMode: boolean;

  formVariables: FormVariableModel[];

  initForm: FormModel;

  disableSaveButton: boolean = false;

  disableStartProcessButton: boolean = false;

  disableCompleteButton: boolean = false;

  showCompleteButton: boolean = true;

  showSaveButton: boolean = true;

  readOnly: boolean = false;

  ngOnInit() {
    this.formRenderingService.register({
      'select-folder': () => AttachFolderWidgetComponent
    });
    this.formDefinition = this.parseForm(this.formDefinition);

    this.initForm = this.formDefinition;
  }

  parseForm(formRepresentationJSON: any): FormModel {
    if (formRepresentationJSON) {
      const form = new FormModel(formRepresentationJSON, undefined, false, this.formService, true);
      this.formVariables = form.variables;
      return form;
    }

    return null;
  }

  hasForm(): boolean {
    return !!this.formDefinition;
}

onRefreshClicked() {
  this.formDefinition = this.initForm;
}

getColorForOutcome(outcomeName: string): ThemePalette {
  return outcomeName === FormBaseComponent.COMPLETE_OUTCOME_NAME ? FormBaseComponent.COMPLETE_BUTTON_COLOR : null;
}

isOutcomeButtonEnabled(outcome: FormOutcomeModel): boolean {
  if (this.formDefinition.readOnly) {
      return false;
  }

  if (outcome) {
      if (outcome.name === FormOutcomeModel.SAVE_ACTION) {
          return !this.disableSaveButton;
      }

      if (outcome.name === FormOutcomeModel.COMPLETE_ACTION) {
          return this.disableCompleteButton ? false : this.formDefinition.isValid;
      }

      if (outcome.name === FormOutcomeModel.START_PROCESS_ACTION) {
          return this.disableStartProcessButton ? false : this.formDefinition.isValid;
      }

      return this.formDefinition.isValid;
  }
  return false;
}

onOutcomeClicked(outcome: FormOutcomeModel): boolean {
  if (!this.readOnly && outcome && this.formDefinition) {

      if (!this.onExecuteOutcome(outcome)) {
          return false;
      }

      if (outcome.isSystem) {
          if (outcome.id === FormBaseComponent.SAVE_OUTCOME_ID) {
              this.saveTaskForm();
              return true;
          }

          if (outcome.id === FormBaseComponent.COMPLETE_OUTCOME_ID) {
              this.completeTaskForm();
              return true;
          }

          if (outcome.id === FormBaseComponent.START_PROCESS_OUTCOME_ID) {
              this.completeTaskForm();
              return true;
          }

          if (outcome.id === FormBaseComponent.CUSTOM_OUTCOME_ID) {
              this.onTaskSaved(this.formDefinition);
              this.storeFormAsMetadata();
              return true;
          }
      } else {
          // Note: Activiti is using NAME field rather than ID for outcomes
          if (outcome.name) {
              this.onTaskSaved(this.formDefinition);
              this.completeTaskForm(outcome.name);
              return true;
          }
      }
  }

  return false;
}

  saveTaskForm() {
    window.alert('Fake save task form!')
  }

  completeTaskForm(outcome?: string) {
    window.alert(`Fake complete form ${outcome}!`)
  }

  onTaskSaved(_form: any) {
    window.alert('Fake task saved!')
  }

  storeFormAsMetadata() {
    window.alert('Fake store form as metadata!')
  }

  onExecuteOutcome(outcome: FormOutcomeModel): boolean {
    const args = new FormOutcomeEvent(outcome);

    this.formService.executeOutcome.next(args);
    if (args.defaultPrevented) {
        return false;
    }

    return !args.defaultPrevented;
}

isOutcomeButtonVisible(outcome: FormOutcomeModel, isFormReadOnly: boolean): boolean {
  if (outcome && outcome.name) {
      if (outcome.name === FormOutcomeModel.COMPLETE_ACTION) {
          return this.showCompleteButton;
      }

      if (isFormReadOnly) {
          return outcome.isSelected;
      }

      if (outcome.name === FormOutcomeModel.SAVE_ACTION) {
          return this.showSaveButton;
      }

      if (outcome.name === FormOutcomeModel.START_PROCESS_ACTION) {
          return false;
      }

      return true;
  }
  return false;
}

  constructor(private formService: FormService, private formRenderingService: FormRenderingService) {}
}
