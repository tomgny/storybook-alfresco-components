import { CoreModule } from '@alfresco/adf-core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../common/common.module';
import { Button } from './button';
import { MyButtonsMenuComponent } from './my-buttons-menu.component';

export default {
    component: MyButtonsMenuComponent,
    title: 'Buttons Menu',
    decorators: [
        moduleMetadata({
            declarations: [MyButtonsMenuComponent],
            imports: [
                RouterModule.forRoot(APP_ROUTES, {
                  useHash: true,
                  enableTracing: false // enable for debug only
                }),
                CoreModule.forRoot(),
                AppCommonModule,
                NoopAnimationsModule
              ],
        }),
    ]
} as Meta;

const Template: Story<MyButtonsMenuComponent> = (args) => ({
    props: args
})

export const DesktopNotEmpty = Template.bind({})

// const createButton = (event, icon, label) => `<button mat-menu-item (click)="${event}">
//     <mat-icon>${icon}</mat-icon>
//     <span>${label}</span>
// </button>`;

const buttons: Button[] = [new Button(`displaySettings()`, `settings`, `Settings`),
new Button(`delete()`, `delete`, `Delete`),
new Button(`turnOffNotifications()`, `notifications_off`, `Disable alerts`),
new Button(`checkVoiceMail()`, `voicemail`, `Check voice mail`),
]

DesktopNotEmpty.args = {
    primary: true,
    buttonsToRender: buttons
}

export const MobileNotEmpty = Template.bind({});

MobileNotEmpty.args = {
    buttonsToRender: buttons,
    viewport: {
        defaultViewport: 'iphonex'
      },
}

export const DesktopEmpty = Template.bind({})

DesktopEmpty.args = {
    buttonsToRender: [],
}

export const MobileEmpty = Template.bind({});

MobileEmpty.args = {
    buttonsToRender: [],
    viewport: {
        defaultViewport: 'iphonex'
      },
}
