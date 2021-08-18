import { Injectable } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeIt from '@angular/common/locales/it';
import localeEs from '@angular/common/locales/es';
import localeJa from '@angular/common/locales/ja';
import localeNl from '@angular/common/locales/nl';
import localePt from '@angular/common/locales/pt';
import localeNb from '@angular/common/locales/nb';
import localeRu from '@angular/common/locales/ru';
import localeCh from '@angular/common/locales/zh';
import localeAr from '@angular/common/locales/ar';
import localeCs from '@angular/common/locales/cs';
import localePl from '@angular/common/locales/pl';
import localeFi from '@angular/common/locales/fi';
import localeDa from '@angular/common/locales/da';
import localeSv from '@angular/common/locales/sv';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor() { }

  registerLocales() {
    registerLocaleData(localeFr);
    registerLocaleData(localeDe);
    registerLocaleData(localeIt);
    registerLocaleData(localeEs);
    registerLocaleData(localeJa);
    registerLocaleData(localeNl);
    registerLocaleData(localePt);
    registerLocaleData(localeNb);
    registerLocaleData(localeRu);
    registerLocaleData(localeCh);
    registerLocaleData(localeAr);
    registerLocaleData(localeCs);
    registerLocaleData(localePl);
    registerLocaleData(localeFi);
    registerLocaleData(localeDa);
    registerLocaleData(localeSv);
  }
}
