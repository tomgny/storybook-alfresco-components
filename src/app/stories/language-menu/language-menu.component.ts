import { LanguageItem, LanguageService } from '@alfresco/adf-core';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'aca-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent implements OnInit, OnDestroy {
  @Input()
  showLanguageMenuInsideNestedMenu: boolean = false;

  @Input()
  languages: string[];

  @Input()
  key1: string;

  @Input()
  key2: string;

  @Input()
  key3: string;

  private languagesConfig: LanguageItem[] = [
    {
      key: 'de',
      label: 'Deutsch'
    },
    {
      key: 'en',
      label: 'English'
    },
    {
      key: 'es',
      label: 'Español'
    },
    {
      key: 'fr',
      label: 'Français'
    },
    {
      key: 'it',
      label: 'Italiano'
    },
    {
      key: 'ja',
      label: '日本語'
    },
    {
      key: 'nb',
      label: 'Bokmål'
    },
    {
      key: 'nl',
      label: 'Nederlands'
    },
    {
      key: 'pt-BR',
      label: 'Português (Brasil)'
    },
    {
      key: 'ru',
      label: 'Русский'
    },
    {
      key: 'zh-CN',
      label: '中文简体'
    },
    {
      key: 'cs',
      label: 'Čeština'
    },
    {
      key: 'da',
      label: 'Dansk'
    },
    {
      key: 'fi',
      label: 'Suomi'
    },
    {
      key: 'pl',
      label: 'Polski'
    },
    {
      key: 'sv',
      label: 'Svenska'
    },
    {
      key: 'ar',
      label: 'العربية',
      direction: 'rtl'
    }
  ];

  dataSource;
  displayedColumns: string[] = ['key', 'translation'];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.dataSource = [this.key1, this.key2, this.key3];

    this.languagesConfig = this.languagesConfig.filter((value) => this.languages.includes(value.label));
    this.languageService.setLanguages(this.languagesConfig);
  }

  ngOnDestroy(): void {
    this.languageService.changeLanguage(this.languagesConfig.find(lang => lang.key === 'en'))
  }
}
