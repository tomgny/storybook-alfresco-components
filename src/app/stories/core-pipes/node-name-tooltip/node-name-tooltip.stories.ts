
import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { NodeNameTooltipComponent } from './node-name-tooltip.component';

export default {
  component: NodeNameTooltipComponent,
  title: 'Pipes from Core/Node Name Tooltip',
  decorators: [
    moduleMetadata({
      declarations: [NodeNameTooltipComponent],
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
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    node: { table: { disable: true } },
  }
} as Meta;

const Template: Story<NodeNameTooltipComponent> = (args) => ({
  props: args
});
export const NodeNameTooltipDefault = Template.bind({})

NodeNameTooltipDefault.args = {
  nodeName: 'Node name',
  nodeTitle: 'Node title',
  nodeDescription: 'Node description',
}

export const NodeNameTooltipOnlyName = Template.bind({})

NodeNameTooltipOnlyName.args = {
  ...NodeNameTooltipDefault.args,
  nodeTitle: null,
  nodeDescription: null,
}

export const NodeNameTooltipTitleMissing = Template.bind({})

NodeNameTooltipTitleMissing.args = {
  ...NodeNameTooltipDefault.args,
  nodeTitle: null,
}

export const NodeNameTooltipDescriptionMissing = Template.bind({})

NodeNameTooltipDescriptionMissing.args = {
  ...NodeNameTooltipDefault.args,
  nodeDescription: null,
}

export const NodeNameTooltipEverythingSame = Template.bind({})

NodeNameTooltipEverythingSame.args = {
  ...NodeNameTooltipDefault.args,
  nodeTitle: 'Node name',
  nodeDescription: 'Node name',
}

export const NodeNameTooltipTitleDescriptionSame = Template.bind({})

NodeNameTooltipTitleDescriptionSame.args = {
  ...NodeNameTooltipDefault.args, 
  nodeTitle: 'Node title',
  nodeDescription: 'Node title',
}

export const NodeNameTooltipDescriptionMissingNameTitleSame = Template.bind({})

NodeNameTooltipDescriptionMissingNameTitleSame.args = {
  ...NodeNameTooltipEverythingSame.args,
  nodeDescription: null,
}

export const NodeNameTooltipTitleMissingNameDescriptionSame = Template.bind({})

NodeNameTooltipTitleMissingNameDescriptionSame.args = {
  ...NodeNameTooltipEverythingSame.args,
  nodeTitle: null,
}
