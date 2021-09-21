/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2020 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TRANSLATION_PROVIDER, CoreModule, AppConfigService, DebugAppConfigService } from '@alfresco/adf-core';
import { ContentModule } from '@alfresco/adf-content-services';
import { SharedModule } from '@alfresco/aca-shared';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

import { FilesComponent } from './components/files/files.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { FavoriteLibrariesComponent } from './components/favorite-libraries/favorite-libraries.component';
import { NodeVersionsDialogComponent } from './dialogs/node-versions/node-versions.dialog';

import { AppStoreModule } from './store/app-store.module';
import { MaterialModule } from './material.module';
import { AppExtensionsModule } from './extensions.module';
import { CoreExtensionsModule } from './extensions/core.extensions.module';
import { AppInfoDrawerModule } from './components/info-drawer/info.drawer.module';
import { DirectivesModule } from './directives/directives.module';
import { ContextMenuModule } from './components/context-menu/context-menu.module';
import { ExtensionsModule } from '@alfresco/adf-extensions';
import { AppToolbarModule } from './components/toolbar/toolbar.module';
import { AppCreateMenuModule } from './components/create-menu/create-menu.module';
import { AppSidenavModule } from './components/sidenav/sidenav.module';
import { AppCommonModule } from './components/common/common.module';
import { AppLayoutModule } from './components/layout/layout.module';
import { AppSearchInputModule } from './components/search/search-input.module';
import { DocumentListCustomComponentsModule } from './components/dl-custom-components/document-list-custom-components.module';
import { AppSearchResultsModule } from './components/search/search-results.module';
import { AppLoginModule } from './components/login/login.module';
import { AppHeaderModule } from './components/header/header.module';
import { AppNodeVersionModule } from './components/node-version/node-version.module';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RecentFilesComponent } from './components/recent-files/recent-files.component';
import { SharedFilesComponent } from './components/shared-files/shared-files.component';
import { CreateFromTemplateDialogComponent } from './dialogs/node-template/create-from-template.dialog';
import { environment } from '../environments/environment';
import { DetailsComponent } from './components/details/details.component';

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
import { CardviewComponent } from './stories/cardview/cardview.component';
import { ViewerComponent } from './stories/viewer/viewer.component';
import { DatatableComponent } from './stories/datatable/datatable.component';
import { DatatableCustomComponent } from './stories/datatable/datatable-custom-data/datatable-custom-data.component';
import { UserInfoComponent } from './stories/user-info/user-info.component';
import { ToolbarComponent } from './stories/toolbar/toolbar.component';
import { DocumentListComponent } from './stories/document-list/document-list.component';
import { UploadButtonComponent } from './stories/upload-button/upload-button.component';
import { TimeAgoComponent } from './stories/core-pipes/time-ago/time-ago.component';
import { MultiValueComponent } from './stories/core-pipes/multi-value/multi-value.component';
import { FormatSpaceComponent } from './stories/core-pipes/format-space/format-space.component';
import { DecimalNumberComponent } from './stories/core-pipes/decimal-number/decimal-number.component';
import { FileSizeComponent } from './stories/core-pipes/file-size/file-size.component';
import { LocalizedDateComponent } from './stories/core-pipes/localized-date/localized-date.component';
import { FullNameComponent } from './stories/core-pipes/full-name/full-name.component';
import { UserInitialComponent } from './stories/core-pipes/user-initial/user-initial.component';
import { TextHighlightComponent } from './stories/core-pipes/text-highlight/text-highlight.component';
import { MimeTypeIconComponent } from './stories/core-pipes/mime-type-icon/mime-type-icon.component';
import { AppConfigComponent } from './stories/core-pipes/app-config/app-config.component';
import { NodeNameTooltipComponent } from './stories/core-pipes/node-name-tooltip/node-name-tooltip.component';
import { ContentMetadataCardComponent } from './stories/content-metadata-card/content-metadata-card.component';
import { ButtonsMenuComponent } from './stories/buttons-menu/buttons-menu.component';
import { HeaderComponent } from './stories/header/header.component';
import { CommentsComponent } from './stories/comments/comments.component';
import { LanguageMenuComponent } from './stories/language-menu/language-menu.component';
import { NotificationHistoryComponent } from './stories/notification-history/notification-history.component';
import { ClipboardComponent } from './stories/clipboard/clipboard.component';
import { FormListComponent } from './stories/form/form-list/form-list.component';
import { FormFieldComponent } from './stories/form/form-field/form-field.component';
import { FormRendererComponent } from './stories/form/form-renderer/form-renderer.component';
import { SortingPickerComponent } from './stories/sorting-picker/sorting-picker.component';
import { LoginComponent } from './stories/login/login.component';
import { EditJsonDialogComponent } from './stories/core-dialogs/edit-json-dialog/edit-json-dialog.component';
import { DownloadZipDialogComponent } from './stories/core-dialogs/download-zip-dialog/download-zip-dialog.component';
import { SidenavLayoutComponent } from './stories/layout/components/sidenav-layout/sidenav-layout.component';
import { SidebarActionMenuComponent } from './stories/layout/components/sidebar-action-menu/sidebar-action-menu.component';
import { ProcessServicesCloudModule, TaskCloudModule, TaskFormModule, TaskListCloudModule } from '@alfresco/adf-process-services-cloud';
import { ContentWidgetModule, ProcessModule, TaskListModule } from '@alfresco/adf-process-services';
import { TaskFormComponent } from './stories/form/form-renderer/visibility-condition-task/task-form/task-form.component';
import { StartFormComponent } from './stories/form/start-form/start-form.component';
import { PaginationComponent } from './stories/pagination/pagination.component';
import { InfinitePaginationComponent } from './stories/infinite-pagination/infinite-pagination.component';
import { ContextMenuComponent } from './stories/context-menu/context-menu.component';
import { InfoDrawerComponent } from './stories/info-drawer/info-drawer.component';
import { InfoDrawerLayoutComponent } from './stories/info-drawer-layout/info-drawer-layout.component';
import { ErrorContentComponent } from './stories/error-content/error-content.component';
import { EmptyContentComponent } from './stories/empty-content/empty-content.component';
import { EmptyListComponent } from './stories/empty-list/empty-list.component';
import { LoginDialogComponent } from './stories/login-dialog/login-dialog.component';
import { LoginDialogPanelComponent } from './stories/login-dialog-panel/login-dialog-panel.component';
import { CommentListComponent } from './stories/comment-list/comment-list.component';
import { IconComponent } from './stories/icon/icon.component';
import { AboutGithubLinkComponent } from './stories/about-github-link/about-github-link.component';
import { AboutProductVersionComponent } from './stories/about-product-version/about-product-version.component';
import { AboutApplicationModulesComponent } from './stories/about-application-modules/about-application-modules.component';
import { JsonCellComponent } from './stories/json-cell/json-cell.component';
import { TextMaskComponent } from './stories/text-mask/text-mask.component';

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

@NgModule({
  imports: [
    BrowserModule,
    environment.e2e ? NoopAnimationsModule : BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true,
      enableTracing: false // enable for debug only
    }),
    MaterialModule,
    CoreModule.forRoot(),
    ContentModule.forRoot(),
    SharedModule.forRoot(),
    AppStoreModule,
    CoreExtensionsModule.forRoot(),
    ExtensionsModule.forRoot(),
    AppExtensionsModule,
    AppLoginModule,
    AppCommonModule,
    AppLayoutModule,
    DirectivesModule,
    ContextMenuModule,
    AppInfoDrawerModule,
    AppToolbarModule,
    AppSidenavModule,
    AppCreateMenuModule,
    DocumentListCustomComponentsModule,
    AppSearchInputModule,
    AppSearchResultsModule,
    AppHeaderModule,
    AppNodeVersionModule,
    HammerModule,
    ProcessServicesCloudModule.forRoot(),
    ProcessModule.forRoot(),
    ContentWidgetModule,
    TaskFormModule,
    TaskListModule,
    TaskCloudModule,
    TaskListCloudModule
  ],
  declarations: [
    AppComponent,
    FilesComponent,
    DetailsComponent,
    LibrariesComponent,
    FavoriteLibrariesComponent,
    NodeVersionsDialogComponent,
    FavoritesComponent,
    RecentFilesComponent,
    SharedFilesComponent,
    CreateFromTemplateDialogComponent,
    CardviewComponent,
    ViewerComponent,
    DatatableComponent,
    DatatableCustomComponent,
    UserInfoComponent,
    ToolbarComponent,
    DocumentListComponent,
    UploadButtonComponent,
    TimeAgoComponent,
    MultiValueComponent,
    FormatSpaceComponent,
    DecimalNumberComponent,
    FileSizeComponent,
    LocalizedDateComponent,
    FullNameComponent,
    UserInitialComponent,
    TextHighlightComponent,
    MimeTypeIconComponent,
    AppConfigComponent,
    NodeNameTooltipComponent,
    ContentMetadataCardComponent,
    ButtonsMenuComponent,
    HeaderComponent,
    CommentsComponent,
    LanguageMenuComponent,
    NotificationHistoryComponent,
    FormListComponent,
    ClipboardComponent,
    FormFieldComponent,
    FormRendererComponent,
    SortingPickerComponent,
    LoginComponent,
    EditJsonDialogComponent,
    DownloadZipDialogComponent,
    SidenavLayoutComponent,
    SidebarActionMenuComponent,
    TaskFormComponent,
    StartFormComponent,
    PaginationComponent,
    InfinitePaginationComponent,
    ContextMenuComponent,
    InfoDrawerComponent,
    InfoDrawerLayoutComponent,
    ErrorContentComponent,
    EmptyContentComponent,
    EmptyListComponent,
    LoginDialogComponent,
    LoginDialogPanelComponent,
    CommentListComponent,
    IconComponent,
    AboutGithubLinkComponent,
    AboutProductVersionComponent,
    AboutApplicationModulesComponent,
    JsonCellComponent,
    TextMaskComponent,
  ],
  providers: [
    { provide: AppConfigService, useClass: DebugAppConfigService },
    {
      provide: TRANSLATION_PROVIDER,
      multi: true,
      useValue: {
        name: 'app',
        source: 'assets'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
