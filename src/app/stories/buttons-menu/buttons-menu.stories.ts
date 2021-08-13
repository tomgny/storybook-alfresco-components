import { CoreModule,  } from '@alfresco/adf-core';
import { BrowserAnimationsModule, /* NoopAnimationsModule */ } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { Button } from './button';
import { ButtonsMenuComponent, ButtonsMenuModule } from './buttons-menu.component';

export default {
    component: ButtonsMenuComponent,
    title: 'Buttons Menu',
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                ButtonsMenuModule,
                RouterModule.forRoot(APP_ROUTES, {
                  useHash: true,
                  enableTracing: false // enable for debug only
                }),
                CoreModule.forRoot(),
                AppCommonModule,
                BrowserAnimationsModule,   
              ],
        }),
    ]
} as Meta;

const Template: Story<ButtonsMenuComponent> = (args) => ({
    props: args
});

const buttons: Button[] = [new Button(`displaySettings()`, `settings`, `Settings`),
new Button(`delete()`, `delete`, `Delete`),
new Button(`turnOffNotifications()`, `notifications_off`, `Disable alerts`),
new Button(`checkVoiceMail()`, `voicemail`, `Check voice mail`),
new Button(`displayInfo()`, `info`, `Display information`),
new Button(`build()`, `build`, `Build`),
];

export const sixButtons = Template.bind({})

sixButtons.args = {
    primary: true,
    buttonsToRender: buttons
}

export const fiveButtons = Template.bind({})

fiveButtons.args = {
    buttonsToRender: buttons.slice(0, 5),
}

export const fourButtons = Template.bind({})

fourButtons.args = {
    buttonsToRender: buttons.slice(0, 4),
}

export const threeButtons = Template.bind({})

threeButtons.args = {
    buttonsToRender: buttons.slice(0, 3),
}

export const twoButtons = Template.bind({})

twoButtons.args = {
    buttonsToRender: buttons.slice(0, 2),
}

export const oneButton = Template.bind({})

oneButton.args = {
    buttonsToRender: buttons.slice(0, 1),
}

export const emptyMenu = Template.bind({})

emptyMenu.args = {
    buttonsToRender: [],
}
