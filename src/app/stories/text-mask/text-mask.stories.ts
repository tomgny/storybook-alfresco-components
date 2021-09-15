import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { TextMaskComponent } from './text-mask.component';

export default {
  component: TextMaskComponent,
  title: 'Core/Components/Text Mask',
  decorators: [
    moduleMetadata({
      declarations: [TextMaskComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        ContentModule.forRoot()
      ]
    })
  ]
} as Meta;

const Template: Story<TextMaskComponent> = (args) => ({
  props: args
});

export const CreditCard = Template.bind({});
CreditCard.args = {
  inputMask: '0000 0000 0000 0000',
  inputMaskPlaceholder: '0000 0000 0000 0000',
  inputName: 'Credit card number',
  inputMaskReversed: true
};

export const UKPostCode = Template.bind({});
UKPostCode.args = {
  inputMask: 'AA99 9AA',
  inputMaskPlaceholder: 'AA99 9AA',
  inputName: 'Some UK postcode',
  inputMaskReversed: true
};

export const FiveDigits = Template.bind({});
FiveDigits.args = {
  inputMask: '00000',
  inputMaskPlaceholder: '00000',
  inputName: 'Five digits',
  inputMaskReversed: true
};

export const FourAlphanumericWithFirstOptionalDigitAndLastDigit = Template.bind({});
FourAlphanumericWithFirstOptionalDigitAndLastDigit.args = {
  inputMask: '9AA0',
  inputMaskPlaceholder: '9AA0',
  inputName: 'Four alphanumeric with first optional digit and last digit',
  inputMaskReversed: true
};

export const FiveAlphabeticsWithLastAlphanumeric = Template.bind({});
FiveAlphabeticsWithLastAlphanumeric.args = {
  inputMask: 'SSSSA',
  inputMaskPlaceholder: 'SSSSA',
  inputName: 'Five alphabetics with last alphanumeric',
  inputMaskReversed: true
};

export const ZeroOrMoreDigits = Template.bind({});
ZeroOrMoreDigits.args = {
  inputMask: '#',
  inputMaskPlaceholder: '#',
  inputName: 'Zero or more digits',
  inputMaskReversed: true
};

export const DoubleNumberWithMaskReversed = Template.bind({});
DoubleNumberWithMaskReversed.args = {
  inputMask: '#0.0',
  inputMaskPlaceholder: '#0.0',
  inputName: 'Double number with mask reversed (right-to-left)',
  inputMaskReversed: true
};

export const DoubleNumberWithoutMaskReversed = Template.bind({});
DoubleNumberWithoutMaskReversed.args = {
  inputMask: '#0.0',
  inputMaskPlaceholder: '#0.0',
  inputName: 'Double number without mask reversed (standard left-to-right)',
  inputMaskReversed: true
};
