import { ContentMetadataModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, CoreModule, NodesApiService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { ContentMetadataCardComponent } from './content-metadata-card.component';
import { customMetadataClassDescription, exifMetadataClassDescription, mockNode1, mockNode2 } from './mock/fake-node-and-classes';
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
  ],
  argTypes: {
    preset: {
      control: { type: null }
    },
    displayAspect: {
      options: [null, customMetadataClassDescription.title, exifMetadataClassDescription.title, 'Custom group', 'Custom group 1'],
      control: { type: 'radio' }
    }
  }
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
  areExifPropertiesEditable: true
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

export const AllPropertiesDisplayed = Template.bind({});

AllPropertiesDisplayed.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'allProperties',
  displayAspect: customMetadataClassDescription.title
};

AllPropertiesDisplayed.parameters = {
  docs: {
    description: {
      story: `This config will display all the aspects and properties available for that specific file:  
      \`\`\`json
      "content-metadata": {
        "presets": {
          "allProperties": {
            includeAll: true,
          },
        }
      },
      \`\`\`
      `
    }
  }
};

export const DefaultPropertiesHidden = Template.bind({});

DefaultPropertiesHidden.args = {
  ...AllPropertiesDisplayed.args,
  displayDefaultProperties: false
};

export const AllowingMultipleAccordionsSimultaneouslyToDisplayMetadataEnabled = Template.bind({});

AllowingMultipleAccordionsSimultaneouslyToDisplayMetadataEnabled.args = {
  ...AllPropertiesDisplayed.args,
  multi: true
};

export const SpecificAspectWhitelisted = Template.bind({});

SpecificAspectWhitelisted.args = {
  ...AllPropertiesDisplayed.args,
  preset: 'exifAspectWhitelistedOnly',
  displayAspect: exifMetadataClassDescription.title
};

SpecificAspectWhitelisted.parameters = {
  docs: {
    description: {
      story: `The default configuration shows every aspect but you can restrict it to just a small selection of aspects by "whitelisting" the ones you want:  
      \`

      "content-metadata": {
        "presets": {   
          "exifAspectWhitelistedOnly": {   
            "exif:exif": "*",   
          },   
        }    
      },    
      \`  
      `
    }
  }
};

export const SpecificPropertiesWhitelisted = Template.bind({});

SpecificPropertiesWhitelisted.args = {
  ...SpecificAspectWhitelisted.args,
  preset: 'pixelDimensionsPropertiesFromExifWhitelistedOnly'
};

SpecificPropertiesWhitelisted.parameters = {
  docs: {
    description: {
      story: `You can further restrict the whitelist to specific properties of one or more aspects by using an array of property names in place of the "*" filter:  
      \`

      "content-metadata": {
        "presets": {
          "pixelDimensionsPropertiesFromExifWhitelistedOnly": {
            "exif:exif": [ "exif:pixelXDimension", "exif:pixelYDimension"]
          },   
        }  
      }, 
      \`  
      `
    }
  }
};

export const MultiValueChipsEnabled = Template.bind({});

MultiValueChipsEnabled.args = {
  ...AllPropertiesDisplayed.args,
  allowMultiValueChips: true
};

export const CustomSeparatorForMultiValuePropertiesSet = Template.bind({});

CustomSeparatorForMultiValuePropertiesSet.args = {
  ...AllPropertiesDisplayed.args,
  customSeparatorForMultiValueProperties: ' --- '
};

export const CherryPickedPropertiesGroupedIntoAccordionDrawer = Template.bind({});

CherryPickedPropertiesGroupedIntoAccordionDrawer.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'customGroupOfCherryPickedProperties',
  displayAspect: 'Custom group'
};

CherryPickedPropertiesGroupedIntoAccordionDrawer.parameters = {
  docs: {
    description: {
      story: `You can also go beyond the aspect oriented configuration if you need to configure the groups and properties in a more detailed way. With this type of configuration any property of any aspect/type can be "cherry picked" and grouped into an accordion drawer, along with a translatable title defined in the preset configuration:  
      \`

      "content-metadata": {
        "presets": {
          "customGroupOfCherryPickedProperties": [
            {
              title: 'Custom group',
              items: [
                { "aspect": "custom:custom", "properties": "*" },
                { "aspect": "exif:exif", "properties": [ "exif:pixelXDimension", "exif:pixelYDimension" ], "editable": this.areExifPropertiesEditable},
              ]
            }
          ],   
        }  
      }, 
      \`  
      `
    }
  }
};

export const CherryPickedPropertiesGroupedIntoMultipleAccordionDrawers = Template.bind({});

CherryPickedPropertiesGroupedIntoMultipleAccordionDrawers.args = {
  ...CherryPickedPropertiesGroupedIntoAccordionDrawer.args,
  preset: 'multipleCustomGroupsOfCherryPickedProperties',
  displayAspect: 'Custom group 1'
};

CherryPickedPropertiesGroupedIntoMultipleAccordionDrawers.parameters = {
  docs: {
    description: {
      story: `More complex example than the above:  
      \`

      "content-metadata": {
        "presets": {
          "multipleCustomGroupsOfCherryPickedProperties": [
            {
              title: 'Custom group 1',
              items: [
                { "aspect": "custom:custom", "properties": "*" },
                { "aspect": "exif:exif", "properties": [        "exif:pixelXDimension", "exif:pixelYDimension" ] },
              ]
            },
            {
              title: 'Custom group 2',
              items: [
                { "aspect": "exif:exif", "properties": "*" },
              ]
            }
          ],
        }  
      }, 
      \`  
      `
    }
  }
};

export const PropertyCustomTitleSet = Template.bind({});

PropertyCustomTitleSet.args = {
  ...CherryPickedPropertiesGroupedIntoAccordionDrawer.args,
  preset: 'propertyCustomTitle'
};

PropertyCustomTitleSet.parameters = {
  docs: {
    description: {
      story: `In layout oriented configuration, the metadata property title can be overridden from ADF as below:  
      \`

      "content-metadata": {
        "presets": {
          "propertyCustomTitle": [{
            title: "Custom group",
            items: [
              { "aspect": "exif:exif", "properties": [ "exif:pixelXDimension",
              { name: "exif:pixelYDimension", title: "Custom Pixel Y Dimension Title" }
                ]
              }
            ]}
          ],
        }  
      }, 
      \`  
      `
    }
  }
};

export const EditionOfOneGroupPropertiesDisabled = Template.bind({});

EditionOfOneGroupPropertiesDisabled.args = {
  ...CherryPickedPropertiesGroupedIntoAccordionDrawer.args,
  areExifPropertiesEditable: false
};

export const ExcludeAspectWhileIncludingAll = Template.bind({});

ExcludeAspectWhileIncludingAll.args = {
  ...DefaultNotPrimary.args,
  node: mockNode2,
  preset: 'exifExcludedFromAllProperties',
  displayAspect: customMetadataClassDescription.title
};

ExcludeAspectWhileIncludingAll.parameters = {
  docs: {
    description: {
      story: `Futhermore, you can also exclude specific aspects by adding the exclude property. It can be either a string if it's only one aspect or an array if you want to exclude multiple aspects at once:  
      \`

      "content-metadata": {
        "presets": {
          "exifExcludedFromAllProperties": {
            includeAll: true,
            exclude: "exif:exif",
          },
        }  
      }, 
      \`  
      `
    }
  }
};

export const IncludeSomePropertiesFromExcludedAspect = Template.bind({});

IncludeSomePropertiesFromExcludedAspect.args = {
  ...ExcludeAspectWhileIncludingAll.args,
  preset: 'somePropertiesFromExifIncludedWhileExifIsExcluded'
};

IncludeSomePropertiesFromExcludedAspect.parameters = {
  docs: {
    description: {
      story: `When using this configuration you can still whitelist aspects and properties as you desire. The example below shows this with an aspect-oriented config::  
      \`

      "content-metadata": {
        "presets": {
          "somePropertiesFromExifIncludedWhileExifIsExcluded": {
            includeAll: true,
            exclude: "exif:exif",
            "exif:exif": [ "exif:pixelXDimension", "exif:pixelYDimension"]
          },
        }  
      }, 
      \`  
      `
    }
  }
};

export const ChosenAspectInReadOnlyMode = Template.bind({});

ChosenAspectInReadOnlyMode.args = {
  ...ExcludeAspectWhileIncludingAll.args,
  preset: 'exifInReadOnlyMode',
  displayAspect: exifMetadataClassDescription.title
};

ChosenAspectInReadOnlyMode.parameters = {
  docs: {
    description: {
      story: `Whenever you have properties that you want to protect from users editing their values you can add them to your configuration to make them read only. \`readOnlyAspects\` will make the whole aspect and its properties non editable:  
      \`

      "content-metadata": {
        "presets": {
          "exifInReadOnlyMode": {
            includeAll: true,
            readOnlyAspects: ["exif:exif"],
          },
        }  
      }, 
      \`  
      `
    }
  }
};

export const ChosenPropertiesInReadOnlyMode = Template.bind({});

ChosenPropertiesInReadOnlyMode.args = {
  ...ExcludeAspectWhileIncludingAll.args,
  preset: 'pixelDimensionPropertiesInReadOnlyMode'
};

ChosenPropertiesInReadOnlyMode.parameters = {
  docs: {
    description: {
      story: `If you want to disable the editing for specific properties you will need to add them to the readOnlyProperties property:  
      \`

      "content-metadata": {
        "presets": {
          "pixelDimensionPropertiesInReadOnlyMode": {
            includeAll: true,
            readOnlyProperties: ["exif:pixelXDimension", "exif:pixelYDimension"]
          },
        }  
      }, 
      \`  
      `
    }
  }
};
