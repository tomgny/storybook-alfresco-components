import { CoreModule, TRANSLATION_PROVIDER } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { LanguageMenuComponent } from './language-menu.component';

const allLanguages = [
  'Deutsch',
  'English',
  'Español',
  'Français',
  'Italiano',
  '日本語',
  'Bokmål',
  'Nederlands',
  'Português (Brasil)',
  'Русский',
  '中文简体',
  'Čeština',
  'Dansk',
  'Suomi',
  'Polski',
  'Svenska',
  'العربية'
];

export default {
  component: LanguageMenuComponent,
  title: 'Core/Components/Language Menu',
  decorators: [
    moduleMetadata({
      declarations: [LanguageMenuComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: TRANSLATION_PROVIDER,
          multi: true,
          useValue: {
            name: 'app',
            source: 'assets'
          }
        }
      ]
    })
  ],
  argTypes: {
    languages: {
      options: allLanguages,
      control: { type: 'check' }
    },
    languagesConfig: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
    dataSource: { table: { disable: true } },
    displayedColumns: { table: { disable: true } }
  }
} as Meta;

const Template: Story<LanguageMenuComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {
  showLanguageMenuInsideNestedMenu: false,
  languages: allLanguages,
  key1: 'ADF_VERSION_LIST.ACTIONS.UPLOAD.TOOLTIP',
  key2: 'NODE_SELECTOR.UPLOAD_BUTTON_SEARCH_WARNING_MESSAGE',
  key3: 'FILE_UPLOAD.MESSAGES.FOLDER_NOT_SUPPORTED'
};

export const LanguageMenuInsideNestedMenu = Template.bind({});

LanguageMenuInsideNestedMenu.args = {
  ...Default.args,
  showLanguageMenuInsideNestedMenu: true
};

export const DifferentLanguagesAvailable = Template.bind({});

DifferentLanguagesAvailable.args = {
  ...Default.args,
  languages: ['Deutsch', 'English', 'Español', 'Français', 'Italiano']
};
