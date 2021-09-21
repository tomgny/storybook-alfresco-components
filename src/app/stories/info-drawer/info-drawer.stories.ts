import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { InfoDrawerComponent } from './info-drawer.component';

export default {
  component: InfoDrawerComponent,
  title: 'Core/Components/Info Drawer',
  decorators: [
    moduleMetadata({
      declarations: [InfoDrawerComponent],
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
    onTabChange: { action: 'tabChanged' },
    onClick: { table: { disable: true } }
  }
} as Meta;

const Template: Story<InfoDrawerComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showHeader: true,
  selectedIndex: 0,
  title: 'Activities',
  label1: 'Activity',
  label2: 'Details',
  icon1: null,
  icon2: null,
  showSecondTab: true,
  tab1Text: 'This is a variant of the Info Drawer Layout component that displays information in tabs. You can use the Info drawer tab subcomponent to add tabs (as shown in the example). There are three regions where you can add your own content using <div> elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna odio, sagittis vel nulla vel, condimentum egestas dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eu hendrerit lectus. Aliquam et ex imperdiet, sodales tellus finibus, malesuada eros. Vestibulum aliquet eros sed diam euismod tincidunt. Pellentesque euismod, augue at blandit dapibus, ex nunc viverra nisl, non laoreet nibh odio in libero. Quisque facilisis, dui luctus fringilla lacinia, dui enim accumsan diam, a vehicula mi nulla quis dolor. Maecenas non neque sed nulla tincidunt vehicula.',
  tab2Text: 'Suspendisse euismod egestas nisi, non ullamcorper orci scelerisque id. Vestibulum mollis ex imperdiet nisl viverra egestas. Nunc commodo, mi elementum auctor bibendum, neque tortor tincidunt justo, eget gravida eros tortor ac magna. Vestibulum nec dui ac ipsum posuere ullamcorper. Nullam ultrices eget tellus ut gravida. Aliquam ullamcorper tellus ac dui vehicula venenatis. Maecenas ante ipsum, vestibulum sit amet fringilla a, fringilla quis leo. Sed nisl nisi, lacinia ac ullamcorper non, tincidunt at massa. Sed at metus fermentum augue eleifend porta. Sed nec dui ut quam facilisis cursus at et eros. Nulla quis diam vitae odio faucibus faucibus ac ac erat. Sed vehicula est eu congue pretium. Donec quis nisi ligula. Donec pellentesque nibh nec scelerisque placerat. Nulla facilisi. Sed egestas nisi at risus iaculis faucibus. Nulla facilisi. Aliquam ac tincidunt justo, sit amet aliquet libero.'
};

export const HeaderHidden = Template.bind({});

HeaderHidden.args = {
  ...Default.args,
  showHeader: false
};

export const SecondTabSelectedByDefault = Template.bind({});

SecondTabSelectedByDefault.args = {
  ...Default.args,
  selectedIndex: 1
};

export const IconsOnTabs = Template.bind({});

IconsOnTabs.args = {
  ...Default.args,
  label1: null,
  label2: null,
  icon1: 'comment',
  icon2: 'people'
};

export const IconsAndLabelsOnTabs = Template.bind({});

IconsAndLabelsOnTabs.args = {
  ...Default.args,
  icon1: 'comment',
  icon2: 'people'
};

export const SecondTabHidden = Template.bind({});

SecondTabHidden.args = {
  ...Default.args,
  showSecondTab: false
};

export const ThirdTabVisable = Template.bind({});

ThirdTabVisable.args = {
  ...Default.args,
  showThirdTab: true
};
