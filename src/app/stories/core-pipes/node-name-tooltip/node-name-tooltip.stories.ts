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
    node: { table: { disable: true } }
  }
} as Meta;

const Template: Story<NodeNameTooltipComponent> = (args) => ({
  props: args
});
export const Default = Template.bind({});

Default.args = {
  nodeName: 'Node name',
  nodeTitle: 'Node title',
  nodeDescription: 'Node description'
};

export const OnlyName = Template.bind({});

OnlyName.args = {
  ...Default.args,
  nodeTitle: null,
  nodeDescription: null
};

export const NoTitle = Template.bind({});

NoTitle.args = {
  ...Default.args,
  nodeTitle: null
};

export const NoDescription = Template.bind({});

NoDescription.args = {
  ...Default.args,
  nodeDescription: null
};

export const EverythingSame = Template.bind({});

EverythingSame.args = {
  ...Default.args,
  nodeTitle: 'Node name',
  nodeDescription: 'Node name'
};

export const TitleDescriptionSame = Template.bind({});

TitleDescriptionSame.args = {
  ...Default.args,
  nodeTitle: 'Node title',
  nodeDescription: 'Node title'
};

export const NoDescriptionNameTitleSame = Template.bind({});

NoDescriptionNameTitleSame.args = {
  ...EverythingSame.args,
  nodeDescription: null
};

export const NoTitleNameDescriptionSame = Template.bind({});

NoTitleNameDescriptionSame.args = {
  ...EverythingSame.args,
  nodeTitle: null
};
