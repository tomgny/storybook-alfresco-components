import { booleanField } from '../../form-field/form-field.models';

export const visibleCheckBoxRefersToAnotherField = booleanField
visibleCheckBoxRefersToAnotherField.visibilityCondition = {
  "leftFormFieldId": null,
  "leftType": "field",
  "leftValue": "showCheckbox",
  "operator": "==",
  "rightValue": "showCheckbox",
  "rightType": "field",
  "nextCondition": null,
  "nextConditionOperator": ""
}
