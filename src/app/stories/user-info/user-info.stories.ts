import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { UserInfoComponent } from './user-info.component';

export default {
    component: UserInfoComponent,
    title: 'User Info component',
    decorators: [
        moduleMetadata({
            declarations: [UserInfoComponent],
            imports: [
                RouterModule.forRoot(APP_ROUTES, {
                    useHash: true,
                    enableTracing: false
                }),
                CoreModule.forRoot(),
                AppCommonModule,
                BrowserAnimationsModule

            ]
        })
    ]
} as Meta;

const Template: Story<UserInfoComponent> = (args) => ({
    props: args,
})

export const Default = Template.bind({});

Default.args = {
    Primary: true,
    bpmBackgroundImage: '',
    ecmBackgroundImage: '',
    menuPositionX: 'after',
    menuPositionY: 'before',
    namePosition: 'right',
    showName: true,
}

export const WithNameHidden = Template.bind({})

WithNameHidden.args = {
    ...Default.args,
    Primary: false,
    showName: false,
}

export const NameOnLeft = Template.bind({})

NameOnLeft.args = {
    ...Default.args,
    Primary: false,
    namePosition: 'left',
}