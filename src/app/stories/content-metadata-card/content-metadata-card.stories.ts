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

export const MetadataReadOnly = Template.bind({});

MetadataReadOnly.args = {
  ...DefaultNotPrimary.args,
  readOnly: true
};

export const EmptyPropertiesDisplayed = Template.bind({});

EmptyPropertiesDisplayed.args = {
  ...DefaultNotPrimary.args,
  displayEmpty: true
};

export const AllPropertiesDisplayed = Template.bind({})

AllPropertiesDisplayed.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'allProperties',
  displayAspect: 'cm:content'
}

export const DefaultPropertiesHidden = Template.bind({});

DefaultPropertiesHidden.args = {
  ...AllPropertiesDisplayed.args,
  displayDefaultProperties: false
};

export const AllowingMultipleAccordionsSimultaneouslyToDisplayMetadataEnabled = Template.bind({})

AllowingMultipleAccordionsSimultaneouslyToDisplayMetadataEnabled.args = {
  ...AllPropertiesDisplayed.args,
  multi: true,
}

export const SpecificAspectWhitelisted = Template.bind({})

SpecificAspectWhitelisted.args = {
  ...AllPropertiesDisplayed.args,
  preset: 'exifAspectWhitelistedOnly',
  displayAspect: 'Exif'
}

export const SpecificPropertiesWhitelisted = Template.bind({})

SpecificPropertiesWhitelisted.args = {
  ...SpecificAspectWhitelisted.args,
  preset: 'pixelDimensionsPropertiesFromExifWhitelistedOnly',
}

export const MultiValueChipsEnabled = Template.bind({})

MultiValueChipsEnabled.args = {
  ...SpecificPropertiesWhitelisted.args,
  allowMultiValueChips: true,
}

export const CustomSeparatorForMultiValuePropertiesSet = Template.bind({})

CustomSeparatorForMultiValuePropertiesSet.args = {
  ...SpecificPropertiesWhitelisted.args,
  customSeparatorForMultiValueProperties: ' --- '
}

export const CherryPickedPropertiesGroupedIntoAccordionDrawer = Template.bind({});

CherryPickedPropertiesGroupedIntoAccordionDrawer.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'customGroupOfCherryPickedProperties',
  displayAspect: 'Custom group'
};

export const CherryPickedPropertiesGroupedIntoMultipleAccordionDrawers = Template.bind({});

CherryPickedPropertiesGroupedIntoMultipleAccordionDrawers.args = {
  ...CherryPickedPropertiesGroupedIntoAccordionDrawer.args,
  preset: 'multipleCustomGroupsOfCherryPickedProperties',
  displayAspect: 'Custom group 1'
}

export const PropertyCustomTitleSet = Template.bind({});

PropertyCustomTitleSet.args = {
  ...CherryPickedPropertiesGroupedIntoAccordionDrawer.args,
  preset: 'propertyCustomTitle',
}

export const EditionOfOneGroupPropertiesDisabled = Template.bind({})

EditionOfOneGroupPropertiesDisabled.args = {
  ...CherryPickedPropertiesGroupedIntoAccordionDrawer.args,
  areExifPropertiesEditable: false,
}

export const ExcludeAspectWhileIncludingAll = Template.bind({})

ExcludeAspectWhileIncludingAll.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'exifExcludedFromAllProperties',
  displayAspect: 'cm:content'
}

export const IncludeSomePropertiesFromExcludedAspect = Template.bind({})

IncludeSomePropertiesFromExcludedAspect.args = {
  ...ExcludeAspectWhileIncludingAll.args,
  preset: 'somePropertiesFromExifIncludedWhileExifIsExcluded',
}

export const ChosenAspectInReadOnlyMode = Template.bind({})

ChosenAspectInReadOnlyMode.args = {
  ...ExcludeAspectWhileIncludingAll.args,
  preset: 'exifInReadOnlyMode',
  displayAspect: 'Exif'
}

export const ChosenPropertiesInReadOnlyMode = Template.bind({})

ChosenPropertiesInReadOnlyMode.args = {
  ...ExcludeAspectWhileIncludingAll.args,
  preset: 'pixelDimensionPropertiesInReadOnlyMode'
}
