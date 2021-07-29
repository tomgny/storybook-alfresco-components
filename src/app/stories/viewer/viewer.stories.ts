import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { ViewerComponent } from './viewer.component';

export default {
    component: ViewerComponent,
    title: 'Viewer component',
    decorators: [
        moduleMetadata({
            declarations: [ViewerComponent],
            imports: [
                RouterModule.forRoot(APP_ROUTES, {
                    useHash: true,
                    enableTracing: false
                }),
                CoreModule.forRoot(),
                AppCommonModule,
                BrowserAnimationsModule,
            ],
        })
    ],
    argTypes: {
        urlFile: {
            options: ['./assets/texts/lorem_ipsum.txt', './assets/texts/lorem_ipsum.pdf',
            './assets/images/alfresco-logo-flower.svg'],
            control: {type: 'radio'},
        },
    },
} as Meta;

const Template: Story<ViewerComponent> = (args) => ({
    props: args,
});

export const Default = Template.bind({});

Default.args = {
    Primary: true,
    overlayMode: false,
    urlFile: './assets/images/alfresco-logo-flower.svg',
    allowThumbnails: true,
    allowDownload: true,
    allowFullScreen: true,
    allowPrint: false,
    showToolbar: true,
    showViewer: true,
    allowRightSidebar: false,
    displayCustomToolbar: false,
    displayMoreToolbarActions: false,
    displayMoreActionsMenu: false,
    displayOpenWith: false,
    displayName: '',
    allowGoBack: true,
}

const DefaultNotPrimary = Template.bind({});

DefaultNotPrimary.args = {
    ...Default.args,
    Primary: false,
}

export const PdfWithoutThumbnails = Template.bind({});

PdfWithoutThumbnails.args = {
    ...DefaultNotPrimary.args,
    urlFile: './assets/texts/lorem_ipsum.pdf',
    allowThumbnails: false,
}

export const DonwloadAndFullscreenAndGoBackDisabled = Template.bind({});

DonwloadAndFullscreenAndGoBackDisabled.args = {
    ...DefaultNotPrimary.args,
    allowDownload: false,
    allowFullScreen: false,
    allowGoBack: false,
}

export const PrintEnabled = Template.bind({});

PrintEnabled.args = {
    ...DefaultNotPrimary.args,
    allowPrint: true,
}

export const ToolbarHidden = Template.bind({});

ToolbarHidden.args = {
    ...DefaultNotPrimary.args,
    showToolbar: false,
}

export const ViewerHidden = Template.bind({});

ViewerHidden.args = {
    ...DefaultNotPrimary.args,
    showViewer: false,
}

export const RightSidebarEnabled = Template.bind({});

RightSidebarEnabled.args = {
    ...DefaultNotPrimary.args,
    allowRightSidebar: true,
}

export const ViewerAsFullPage = Template.bind({});

ViewerAsFullPage.args = {
    ...DefaultNotPrimary.args,
    overlayMode: true,
}

export const CustomToolbar = Template.bind({});

CustomToolbar.args = {
    ...DefaultNotPrimary.args,
    displayCustomToolbar: true,
}

export const MoreToolbarActions = Template.bind({})

MoreToolbarActions.args = {
    ...DefaultNotPrimary.args,
    displayMoreToolbarActions: true,
}

export const MoreToolbarActionsMenu = Template.bind({})

MoreToolbarActionsMenu.args = {
    ...DefaultNotPrimary.args,
    displayMoreActionsMenu: true,
}

export const OpenWith = Template.bind({})

OpenWith.args = {
    ...DefaultNotPrimary.args,
    displayOpenWith: true,
}

export const DisplayCustomFileName = Template.bind({})

DisplayCustomFileName.args = {
    ...DefaultNotPrimary.args,
    displayName: 'Custom File Name',
}