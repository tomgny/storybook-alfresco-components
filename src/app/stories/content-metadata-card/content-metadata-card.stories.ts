import { ContentMetadataModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, CoreModule, NodesApiService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { ContentMetadataCardComponent } from './content-metadata-card.component';
import { mockNode1, mockNode2 } from './mock/fake-node-and-classes';
import { AlfrescoApiServiceStub, NodesApiServiceStub } from './mock/stub-services-and-api';

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
      providers: [
        { provide: NodesApiService, useClass: NodesApiServiceStub },
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub }
      ]
    })
  ]
} as Meta;

const Template: Story<ContentMetadataCardComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

console.log(mockNode1);


Default.args = {
  Primary: true,
  node: mockNode1,
  preset: 'default',
  displayDefaultProperties: true,
  displayAspect: null,
  displayEmpty: false,
  multi: false,
  readOnly: false,
  allowMultiValueChips: false,
  customSeparatorForMultiValueProperties: ', ',
  areExifPropertiesEditable: true,
};

const DefaultNotPrimary = Template.bind({});

DefaultNotPrimary.args = {
  ...Default.args,
  Primary: false
};

export const EditionDisabled = Template.bind({});

EditionDisabled.args = {
  ...DefaultNotPrimary.args,
  readOnly: true
};

export const EmptyPropertiesShown = Template.bind({});

EmptyPropertiesShown.args = {
  ...DefaultNotPrimary.args,
  displayEmpty: true
};

export const includeAllEnabled = Template.bind({})

includeAllEnabled.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'includeAll',
}

export const DefaultPropertiesHidden = Template.bind({});

DefaultPropertiesHidden.args = {
  ...includeAllEnabled.args,
  displayDefaultProperties: false
};

export const DisplayingMultipleAccordionsSimultaneouslyEnabled = Template.bind({})

DisplayingMultipleAccordionsSimultaneouslyEnabled.args = {
  ...includeAllEnabled.args,
  multi: true,
}

export const whitelistAspect = Template.bind({})

whitelistAspect.args = {
  ...includeAllEnabled.args,
  preset: 'exifAspectOnly',
  displayAspect: 'exif:exif'
}

export const whitelistProperties = Template.bind({})

whitelistProperties.args = {
  ...includeAllEnabled.args,
  preset: 'pixelDimensionsWhitelistedOnly',
}

export const MultiValueChipsEnabled = Template.bind({})

MultiValueChipsEnabled.args = {
  ...whitelistProperties.args,
  allowMultiValueChips: true,
}

export const CustomSeparatorForMultiValuePropertiesSet = Template.bind({})

CustomSeparatorForMultiValuePropertiesSet.args = {
  ...whitelistProperties.args,
  customSeparatorForMultiValueProperties: ' --- '
}

export const layoutOrientedConfig = Template.bind({});

layoutOrientedConfig.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'layoutOriented',
};

export const complexLayoutOriendtConfig = Template.bind({});

complexLayoutOriendtConfig.args = {
  ...layoutOrientedConfig.args,
  preset: 'complexLayoutOriented'
}

export const customPropertyTitle = Template.bind({});

customPropertyTitle.args = {
  ...layoutOrientedConfig.args,
  preset: 'setPropertyTitle',
}

export const exifPropertiesInLayoutOrientedConfigNotEditable = Template.bind({})

exifPropertiesInLayoutOrientedConfigNotEditable.args = {
  ...layoutOrientedConfig.args,
  areExifPropertiesEditable: false,
}



export const ExifPropertiesNotEditable = Template.bind({})

ExifPropertiesNotEditable.args = {
  ...layoutOrientedConfig.args,
  areExifPropertiesEditable: false,
}

export const excludeAspect = Template.bind({})

excludeAspect.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'excludeExif',
  displayAspect: 'cm:content'
}

export const includePropertiesFromExcludedAspect = Template.bind({})

includePropertiesFromExcludedAspect.args = {
  ...excludeAspect.args,
  preset: 'excludeExifIncludeSomeProperties',
}

export const readOnlyAspect = Template.bind({})

readOnlyAspect.args = {
  ...excludeAspect.args,
  preset: 'exifReadOnly'
}

export const readOnlyProperties = Template.bind({})

readOnlyProperties.args = {
  ...excludeAspect.args,
  preset: 'pixelDimensionsReadOnly'
}

