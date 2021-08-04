import { ContentMetadataModule } from '@alfresco/adf-content-services';
import { CoreModule } from '@alfresco/adf-core';
import { Node } from '@alfresco/js-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { ContentMetadataCardComponent } from './content-metadata-card.component';

export default {
    component: ContentMetadataCardComponent,
    title: 'Content Metadata Card component',
    decorators: [
        moduleMetadata({
            declarations: [ContentMetadataCardComponent],
            imports: [
                RouterModule.forRoot(APP_ROUTES, {
                    useHash: true,
                    enableTracing: false
                }),
                CoreModule.forRoot(),
                AppCommonModule,
                BrowserAnimationsModule,
                ContentMetadataModule
            ],
        })
    ],
} as Meta;

const Template: Story<ContentMetadataCardComponent> = (args) => ({
    props: args,
});

export const Default = Template.bind({});

const mockNode1 = new Node({
    isFile: true,
    createdByUser: { 'id': 'admin', 'displayName': 'Administrator' },
    modifiedAt: '2017-05-24T15:08:55.640Z',
    nodeType: 'cm:content',
    content: {
        'mimeType': 'application/rtf',
        'mimeTypeName': 'Rich Text Format',
        'sizeInBytes': 14530,
        'encoding': 'UTF-8'
    },
    parentId: 'd124de26-6ba0-4f40-8d98-4907da2d337a',
    createdAt: '2017-05-24T15:08:55.640Z',
    path: {
        'name': '/Company Home/Guest Home',
        'isComplete': true,
        'elements': [{
            'id': '94acfc73-7014-4475-9bd9-93a2162f0f8c',
            'name': 'Company Home'
        }, { 'id': 'd124de26-6ba0-4f40-8d98-4907da2d337a', 'name': 'Guest Home' }]
    },
    isFolder: false,
    modifiedByUser: { 'id': 'admin', 'displayName': 'Administrator' },
    name: 'b_txt_file.rtf',
    id: '70e1cc6a-6918-468a-b84a-1048093b06fd',
    properties: { 'cm:versionLabel': '1.0', 'cm:versionType': 'MAJOR' },
    allowableOperations: ['delete', 'update']
});

Default.args = {
    Primary: true,
    node: mockNode1,
}