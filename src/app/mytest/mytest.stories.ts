import { Meta, Story } from '@storybook/angular';
import { MytestComponent } from './mytest.component';

export default {
  component: MytestComponent,
  title: 'Test boolean(btn)',
} as Meta;

const Template: Story<MytestComponent> = (args) => ({
  props: {
    ...args
  }
});

export const TestBoolean = Template.bind({});
TestBoolean.args = {
  testBoolean: true
}
