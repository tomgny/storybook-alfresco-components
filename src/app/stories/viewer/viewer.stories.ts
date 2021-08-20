import { AlfrescoApiService, AuthenticationService, CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { CustomThumbnailsModule } from './custom-thumbnails/custom-thumbnails.module';
import { ViewerComponent } from './viewer.component';
import { action } from '@storybook/addon-actions';
import { ContentMetadataModule, DocumentListModule } from '@alfresco/adf-content-services';
import { AlfrescoApiServiceStub, AuthenticationServiceStub } from './mock/stub-services';

export default {
    component: ViewerComponent,
    title: 'Core/Components/Viewer',
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
                CustomThumbnailsModule,
                ContentMetadataModule,
                DocumentListModule,
            ],
            providers: [
                { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
                { provide: AuthenticationService, useClass: AuthenticationServiceStub }
            ],
        })
    ],
    argTypes: {
        urlFile: {
            options: ['./assets/texts/lorem_ipsum.txt', './assets/texts/lorem_ipsum.pdf',
            './assets/images/alfresco-logo-flower.svg', './assets/video/a_mp4_file.mp4'],
            control: {type: 'radio'},
        },
    },
} as Meta;

const actionsData = {
    onPrintClick: action('print'),
    onNavigateBeforeClick: action('navigateBefore'),
    onNavigateNextClick: action('navigateNext'),
  };

const Template: Story<ViewerComponent> = (args) => ({
    props: args,
    onPrintClick: actionsData.onPrintClick,
    onNavigateBeforeClick: actionsData.onNavigateBeforeClick,
    onNavigateNextClick: actionsData.onNavigateNextClick,
});

export const Default = Template.bind({});

Default.args = {
    overlayMode: false,
    urlFile: './assets/images/alfresco-logo-flower.svg',
    allowThumbnails: true,
    allowDownload: true,
    allowFullScreen: true,
    allowPrint: false,
    showToolbar: true,
    showViewer: true,
    allowRightSidebar: false,
    allowLeftSidebar: false,
    displayCustomToolbar: false,
    displayMoreToolbarActions: false,
    displayMoreActionsMenu: false,
    displayOpenWith: false,
    displayName: '',
    allowGoBack: true,
    displayCustomThumbnails: false,
    renderBlobFile: false,
    mimeType: '',
    allowNavigate: false,
    canNavigateBefore: true,
    canNavigateNext: true,
    nodeId: '',
    showDocumentList: false,
}

export const PdfThumbnailsDisabled = Template.bind({});

PdfThumbnailsDisabled.args = {
    ...Default.args,
    urlFile: './assets/texts/lorem_ipsum.pdf',
    allowThumbnails: false,
}

export const PdfCustomThumbnails = Template.bind({})

PdfCustomThumbnails.args = {
    ...Default.args,
    urlFile: './assets/texts/lorem_ipsum.pdf',
    displayCustomThumbnails: true,
}

export const DonwloadAndFullscreenAndGoBackDisabled = Template.bind({});

DonwloadAndFullscreenAndGoBackDisabled.args = {
    ...Default.args,
    allowDownload: false,
    allowFullScreen: false,
    allowGoBack: false,
}

export const PrintEnabled = Template.bind({});

PrintEnabled.args = {
    ...Default.args,
    allowPrint: true,
}

export const ToolbarHidden = Template.bind({});

ToolbarHidden.args = {
    ...Default.args,
    showToolbar: false,
}

export const RightSidebarEnabled = Template.bind({});

RightSidebarEnabled.args = {
    ...Default.args,
    allowRightSidebar: true,
}

export const LeftSidebarEnabledWithMetadataTemplate = Template.bind({})

LeftSidebarEnabledWithMetadataTemplate.args = {
    ...Default.args,
    urlFile: '',
    nodeId: 'lorem_ipsum_text',
    allowLeftSidebar: true,
}

export const ViewerAsFullPage = Template.bind({});

ViewerAsFullPage.args = {
    ...Default.args,
    overlayMode: true,
}

export const CustomToolbar = Template.bind({});

CustomToolbar.args = {
    ...Default.args,
    displayCustomToolbar: true,
}

export const MoreToolbarActions = Template.bind({})

MoreToolbarActions.args = {
    ...Default.args,
    displayMoreToolbarActions: true,
}

export const MoreToolbarActionsMenu = Template.bind({})

MoreToolbarActionsMenu.args = {
    ...Default.args,
    displayMoreActionsMenu: true,
}

export const OpenWithMenu = Template.bind({})

OpenWithMenu.args = {
    ...Default.args,
    displayOpenWith: true,
}

export const DisplayCustomFileName = Template.bind({})

DisplayCustomFileName.args = {
    ...Default.args,
    displayName: 'you_can_set_custom_display_names.exe',
}

export const BlobFile = Template.bind({})

BlobFile.args = {
    ...Default.args,
    urlFile: '',
    renderBlobFile: true,
    displayName: 'blob_file.txt'
}

export const FileWithoutExtension = Template.bind({})

FileWithoutExtension.args = {
    ...Default.args,
    urlFile: './assets/texts/no_extension',
    mimeType: 'text/plain',
}

export const NavigationEnabled = Template.bind({})

NavigationEnabled.args = {
    ...Default.args,
    allowNavigate: true,
}

export const NavigationBeforeDisabled = Template.bind({})

NavigationBeforeDisabled.args = {
    ...NavigationEnabled.args,
    canNavigateBefore: false,
}

export const NavigationNextDisabled = Template.bind({})

NavigationNextDisabled.args = {
    ...NavigationEnabled.args,
    canNavigateNext: false,
}

export const IntegrationWithDocumentList = Template.bind({})

IntegrationWithDocumentList.args = {
    ...Default.args,
    showDocumentList: true,
    urlFile: '',
    showViewer: false,
    nodeId: 'fake_folder'
}
