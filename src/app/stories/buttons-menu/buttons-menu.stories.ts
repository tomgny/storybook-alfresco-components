import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { Button } from './button';
import { ButtonsMenuComponent, ButtonsMenuModule } from './buttons-menu.component';

export default {
  component: ButtonsMenuComponent,
  title: 'Buttons Menu component',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        ButtonsMenuModule,
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ]
    })
  ],
  argTypes: {
    alertFunctionName: { table: { disable: true } },
  }
} as Meta;

const Template: Story<ButtonsMenuComponent> = (args) => ({
  props: args
});

const buttons: Button[] = [
  new Button(`displaySettings()`, `settings`, `Settings`),
  new Button(`delete()`, `delete`, `Delete`),
  new Button(`turnOffNotifications()`, `notifications_off`, `Disable alerts`),
  new Button(`checkVoiceMail()`, `voicemail`, `Check voice mail`),
  new Button(`displayInfo()`, `info`, `Display information`),
  new Button(`build()`, `build`, `Build`)
];

export const SixButtons = Template.bind({});

SixButtons.args = {
  buttonsToRender: buttons
};

export const FiveButtons = Template.bind({});

FiveButtons.args = {
  buttonsToRender: buttons.slice(0, 5)
};

export const FourButtons = Template.bind({});

FourButtons.args = {
  buttonsToRender: buttons.slice(0, 4)
};

export const ThreeButtons = Template.bind({});

ThreeButtons.args = {
  buttonsToRender: buttons.slice(0, 3)
};

export const TwoButtons = Template.bind({});

TwoButtons.args = {
  buttonsToRender: buttons.slice(0, 2)
};

export const OneButton = Template.bind({});

OneButton.args = {
  buttonsToRender: buttons.slice(0, 1)
};

export const EmptyMenu = Template.bind({});

EmptyMenu.args = {
  buttonsToRender: []
};
