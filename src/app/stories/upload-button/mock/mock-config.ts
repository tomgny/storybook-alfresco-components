export const mockConfig = {
  "$schema": "../node_modules/@alfresco/adf-core/app.config.schema.json",
  "ecmHost": "{protocol}//{hostname}{:port}",
  "aosHost": "{protocol}//{hostname}{:port}/alfresco/aos",
  "baseShareUrl": "{protocol}//{hostname}{:port}/#/preview/s",
  "providers": "ECM",
  "authType": "BASIC",
  "loginRoute": "login",
  "oauth2": {
    "host": "http://localhost:4200/auth/realms/alfresco",
    "clientId": "alfresco",
    "scope": "openid",
    "secret": "",
    "implicitFlow": true,
    "silentLogin": true,
    "publicUrls": ["**/preview/s/*", "**/settings", "**/blank"],
    "redirectSilentIframeUri": "{protocol}//{hostname}{:port}/assets/silent-refresh.html",
    "redirectUri": "/",
    "redirectUriLogout": "/logout"
  },
  "locale": "en",
  "application": {
    "name": "Alfresco Content Application",
    "version": "2.4.0",
    "logo": "assets/images/alfresco-logo-flower.svg",
    "headerImagePath": "assets/images/mastHead-bg-shapesPattern.svg",
    "copyright": "APP.COPYRIGHT"
  },
  "viewer.maxRetries": 1,
  "sharedLinkDateTimePickerType": "date",
  "headerColor": "#ffffff",
  "pagination": {
    "size": 25,
    "supportedPageSizes": [25, 50, 100]
  },
  "files": {
    "excluded": [".DS_Store", "desktop.ini", "Thumbs.db", ".git"],
    "match-options": {
      "nocase": true
    }
  },
  "dateValues": {
    "defaultDateFormat": "mediumDate",
    "defaultDateTimeFormat": "MMM d, y, h:mm",
    "defaultLocale": "en"
  },
  "adf-version-manager": {
    "allowComments": true,
    "allowDownload": true
  },
  "sideNav": {
    "preserveState": true,
    "expandedSidenav": true
  },
  "languages": [
    {
      "key": "de",
      "label": "Deutsch"
    },
    {
      "key": "en",
      "label": "English"
    },
    {
      "key": "es",
      "label": "Español"
    },
    {
      "key": "fr",
      "label": "Français"
    },
    {
      "key": "it",
      "label": "Italiano"
    },
    {
      "key": "ja",
      "label": "日本語"
    },
    {
      "key": "nb",
      "label": "Bokmål"
    },
    {
      "key": "nl",
      "label": "Nederlands"
    },
    {
      "key": "pt-BR",
      "label": "Português (Brasil)"
    },
    {
      "key": "ru",
      "label": "Русский"
    },
    {
      "key": "zh-CN",
      "label": "中文简体"
    },
    {
      "key": "cs",
      "label": "Čeština"
    },
    {
      "key": "da",
      "label": "Dansk"
    },
    {
      "key": "fi",
      "label": "Suomi"
    },
    {
      "key": "pl",
      "label": "Polski"
    },
    {
      "key": "sv",
      "label": "Svenska"
    },
    {
      "key": "ar",
      "label": "العربية",
      "direction": "rtl"
    }
  ],
  "content-metadata": {
    "presets": {
      "custom": [
        {
          "includeAll": true,
          "exclude": [
            "rn:renditioned",
            "cm:versionable",
            "cm:auditable",
            "cm:thumbnailModification",
            "cm:content",
            "cm:author",
            "cm:titled",
            "cm:generalclassifiable",
            "cm:taggable",
            "dp:restrictable",
            "fm:commentsRollup",
            "qshare:shared",

            "exif:exif",
            "cm:effectivity",

            "cm:likesRatingSchemeRollups",
            "cm:lockable",
            "cm:ownable"
          ]
        },
        {
          "title": "APP.CONTENT_METADATA.EXIF_GROUP_TITLE",
          "items": [
            {
              "aspect": "exif:exif",
              "properties": [
                "exif:pixelXDimension",
                "exif:pixelYDimension",
                "exif:dateTimeOriginal",
                "exif:exposureTime",
                "exif:fNumber",
                "exif:flash",
                "exif:focalLength",
                "exif:isoSpeedRatings",
                "exif:orientation",
                "exif:manufacturer",
                "exif:model",
                "exif:software"
              ]
            }
          ]
        },
        {
          "title": "APP.CONTENT_METADATA.EFFECTIVITY_GROUP_TITLE",
          "items": [
            {
              "aspect": "cm:effectivity",
              "properties": [
                "cm:from",
                "cm:to"
              ]
            }
          ]
        }
      ]
    },
    "multi-value-pipe-separator": ", ",
    "multi-value-chips": true
  },
  "search-headers": {
    "filterWithContains": true,
    "app:fields": [
      "cm:name",
      "cm:title",
      "cm:description",
      "TEXT",
      "TAG"
    ],
    "categories": [
      {
        "id": "queryName",
        "name": "SEARCH.SEARCH_HEADER.FILTERS.NAME.TITLE",
        "columnKey": "name",
        "enabled": true,
        "component": {
          "selector": "text",
          "settings": {
            "pattern": "cm:name:'(.*?)'",
            "field": "cm:name",
            "placeholder": "SEARCH.SEARCH_HEADER.FILTERS.NAME.PLACEHOLDER",
            "searchPrefix" : "*",
            "searchSuffix" : "*"
          }
        }
      },
      {
        "id": "checkList",
        "name": "SEARCH.SEARCH_HEADER.FILTERS.TYPE.TITLE",
        "columnKey":"$thumbnail",
        "enabled": true,
        "component": {
          "selector": "check-list",
          "settings": {
            "pageSize": 5,
            "operator": "OR",
            "options": [
              {
                "name": "SEARCH.SEARCH_HEADER.FILTERS.TYPE.FOLDER",
                "value": "TYPE:'cm:folder'"
              },
              {
                "name": "SEARCH.SEARCH_HEADER.FILTERS.TYPE.DOCUMENT",
                "value": "TYPE:'cm:content'"
              }
            ]
          }
        }
      },
      {
        "id": "contentSize",
        "name": "SEARCH.SEARCH_HEADER.FILTERS.SIZE.TITLE",
        "columnKey":"content.sizeInBytes",
        "enabled": true,
        "component": {
          "selector": "check-list",
          "settings": {
            "options": [
              {
                "name": "SEARCH.SEARCH_HEADER.FILTERS.SIZE.SMALL",
                "value": "content.size:[0 TO 1048576> OR TYPE:'cm:folder'"
              },
              {
                "name": "SEARCH.SEARCH_HEADER.FILTERS.SIZE.MEDIUM",
                "value": "content.size:[1048576 TO 52428800] OR TYPE:'cm:folder'"
              },
              {
                "name": "SEARCH.SEARCH_HEADER.FILTERS.SIZE.LARGE",
                "value": "content.size:<52428800 TO 524288000] OR TYPE:'cm:folder'"
              },
              {
                "name": "SEARCH.SEARCH_HEADER.FILTERS.SIZE.HUGE",
                "value": "content.size:<524288000 TO MAX] OR TYPE:'cm:folder'"
              }
            ]
          }
        }
      },
      {
        "id": "createdDateRange",
        "name": "SEARCH.SEARCH_HEADER.FILTERS.DATE.TITLE",
        "columnKey": "createdAt",
        "enabled": true,
        "component": {
          "selector": "date-range",
          "settings": {
            "field": "cm:created",
            "dateFormat": "DD-MMM-YY",
            "maxDate": "today"
          }
        }
      }
    ],
    "highlight": {
      "prefix": " ",
      "postfix": " ",
      "mergeContiguous": true,
      "fields": [
        {
          "field": "cm:title"
        },
        {
          "field": "description",
          "prefix": "(",
          "postfix": ")"
        }
      ]
    },
    "sorting": {
      "options": [
        {
          "key": "name",
          "label": "Name",
          "type": "FIELD",
          "field": "cm:name",
          "ascending": true
        },
        {
          "key": "content.sizeInBytes",
          "label": "Size",
          "type": "FIELD",
          "field": "content.size",
          "ascending": true
        },
        {
          "key": "createdByUser",
          "label": "Author",
          "type": "FIELD",
          "field": "cm:creator",
          "ascending": true
        },
        {
          "key": "createdAt",
          "label": "Created",
          "type": "FIELD",
          "field": "cm:created",
          "ascending": true
        },
        {
          "key": "modifiedAt",
          "label": "SEARCH.SORT.MODIFIED_DATE",
          "type": "FIELD",
          "field": "cm:modified",
          "ascending": true
        },
        {
          "key": "modifiedByUser.displayName",
          "label": "SEARCH.SORT.MODIFIER",
          "type": "FIELD",
          "field": "cm:modifier",
          "ascending": true
        },
        {
          "key": "score",
          "label": "Relevance",
          "type": "SCORE",
          "field": "score",
          "ascending": false
        }
      ],
      "defaults": [
        {
          "key": "score",
          "type": "SCORE",
          "field": "score",
          "ascending": false
        }
      ]
    }
  },
  "aspect-visible": {
    "default" : ["cm:generalclassifiable", "cm:complianceable",
                 "cm:dublincore", "cm:effectivity", "cm:summarizable",
                 "cm:versionable", "cm:templatable","cm:emailed", "emailserver:aliasable",
                 "cm:taggable", "app:inlineeditable", "cm:geographic", "exif:exif",
                 "audio:audio", "cm:indexControl", "dp:restrictable", "smf:customConfigSmartFolder", "smf:systemConfigSmartFolder"],
    "ai": ["ai:products", "ai:dates", "ai:places", "ai:events", "ai:organizations", "ai:people", "ai:things", "ai:quantities", "ai:creativeWorks", "ai:labels", "ai:textLines"]
  }
}


export const mimeTypeIcons: any = {
  'image/png': './assets/images/ft_ic_raster_image.svg',
  'image/jpeg': './assets/images/ft_ic_raster_image.svg',
  'image/gif': './assets/images/ft_ic_raster_image.svg',
  'image/bmp': './assets/images/ft_ic_raster_image.svg',
  'image/cgm': './assets/images/ft_ic_raster_image.svg',
  'image/ief': './assets/images/ft_ic_raster_image.svg',
  'image/jp2': './assets/images/ft_ic_raster_image.svg',
  'image/tiff': './assets/images/ft_ic_raster_image.svg',
  'image/vnd.adobe.photoshop': './assets/images/ft_ic_raster_image.svg',
  'image/vnd.adobe.premiere': './assets/images/ft_ic_raster_image.svg',
  'image/x-cmu-raster': './assets/images/ft_ic_raster_image.svg',
  'image/x-dwt': './assets/images/ft_ic_raster_image.svg',
  'image/x-portable-anymap': './assets/images/ft_ic_raster_image.svg',
  'image/x-portable-bitmap': './assets/images/ft_ic_raster_image.svg',
  'image/x-portable-graymap': './assets/images/ft_ic_raster_image.svg',
  'image/x-portable-pixmap': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-adobe': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-canon': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-fuji': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-hasselblad': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-kodak': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-leica': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-minolta': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-nikon': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-olympus': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-panasonic': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-pentax': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-red': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-sigma': './assets/images/ft_ic_raster_image.svg',
  'image/x-raw-sony': './assets/images/ft_ic_raster_image.svg',
  'image/x-xbitmap': './assets/images/ft_ic_raster_image.svg',
  'image/x-xpixmap': './assets/images/ft_ic_raster_image.svg',
  'image/x-xwindowdump': './assets/images/ft_ic_raster_image.svg',
  'image/svg+xml': './assets/images/ft_ic_vector_image.svg',
  'application/eps': './assets/images/ft_ic_raster_image.svg',
  'application/illustrator': './assets/images/ft_ic_raster_image.svg',
  'application/pdf': './assets/images/ft_ic_pdf.svg',
  'application/vnd.ms-excel': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-excel.addin.macroenabled.12': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-excel.sheet.binary.macroenabled.12': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-excel.sheet.macroenabled.12': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-excel.template.macroenabled.12': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.sun.xml.calc': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.sun.xml.calc.template': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-outlook': './assets/images/ft_ic_document.svg',
  'application/msword': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.template': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.ms-word.document.macroenabled.12': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.ms-word.template.macroenabled.12': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.sun.xml.writer': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.sun.xml.writer.template': './assets/images/ft_ic_ms_word.svg',
  'application/rtf': './assets/images/ft_ic_ms_word.svg',
  'text/rtf': './assets/images/ft_ic_ms_word.svg',
  'application/vnd.ms-powerpoint': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.openxmlformats-officedocument.presentationml.template': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.openxmlformats-officedocument.presentationml.slideshow': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.oasis.opendocument.presentation': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.oasis.opendocument.presentation-template': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.openxmlformats-officedocument.presentationml.slide': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.sun.xml.impress': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.sun.xml.impress.template': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.oasis.opendocument.spreadsheet': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.oasis.opendocument.spreadsheet-template': './assets/images/ft_ic_ms_excel.svg',
  'application/vnd.ms-powerpoint.addin.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.ms-powerpoint.presentation.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.ms-powerpoint.slide.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.ms-powerpoint.slideshow.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'application/vnd.ms-powerpoint.template.macroenabled.12': './assets/images/ft_ic_ms_powerpoint.svg',
  'video/mp4': './assets/images/ft_ic_video.svg',
  'video/3gpp': './assets/images/ft_ic_video.svg',
  'video/3gpp2': './assets/images/ft_ic_video.svg',
  'video/mp2t': './assets/images/ft_ic_video.svg',
  'video/mpeg': './assets/images/ft_ic_video.svg',
  'video/mpeg2': './assets/images/ft_ic_video.svg',
  'video/ogg': './assets/images/ft_ic_video.svg',
  'video/quicktime': './assets/images/ft_ic_video.svg',
  'video/webm': './assets/images/ft_ic_video.svg',
  'video/x-flv': './assets/images/ft_ic_video.svg',
  'video/x-m4v': './assets/images/ft_ic_video.svg',
  'video/x-ms-asf': './assets/images/ft_ic_video.svg',
  'video/x-ms-wmv': './assets/images/ft_ic_video.svg',
  'video/x-msvideo': './assets/images/ft_ic_video.svg',
  'video/x-rad-screenplay': './assets/images/ft_ic_video.svg',
  'video/x-sgi-movie': './assets/images/ft_ic_video.svg',
  'video/x-matroska': './assets/images/ft_ic_video.svg',
  'audio/mpeg': './assets/images/ft_ic_audio.svg',
  'audio/ogg': './assets/images/ft_ic_audio.svg',
  'audio/wav': './assets/images/ft_ic_audio.svg',
  'audio/basic': './assets/images/ft_ic_audio.svg',
  'audio/mp3': './assets/images/ft_ic_audio.svg',
  'audio/mp4': './assets/images/ft_ic_audio.svg',
  'audio/vnd.adobe.soundbooth': './assets/images/ft_ic_audio.svg',
  'audio/vorbis': './assets/images/ft_ic_audio.svg',
  'audio/x-aiff': './assets/images/ft_ic_audio.svg',
  'audio/x-flac': './assets/images/ft_ic_audio.svg',
  'audio/x-ms-wma': './assets/images/ft_ic_audio.svg',
  'audio/x-wav': './assets/images/ft_ic_audio.svg',
  'x-world/x-vrml': './assets/images/ft_ic_video.svg',
  'text/plain': './assets/images/ft_ic_document.svg',
  'application/vnd.oasis.opendocument.text': './assets/images/ft_ic_document.svg',
  'application/vnd.oasis.opendocument.text-template': './assets/images/ft_ic_document.svg',
  'application/x-javascript': './assets/images/ft_ic_document.svg',
  'application/json': './assets/images/ft_ic_document.svg',
  'text/csv': './assets/images/ft_ic_document.svg',
  'text/xml': './assets/images/ft_ic_document.svg',
  'text/html': './assets/images/ft_ic_website.svg',
  'application/x-compressed': './assets/images/ft_ic_archive.svg',
  'application/x-zip-compressed': './assets/images/ft_ic_archive.svg',
  'application/zip': './assets/images/ft_ic_archive.svg',
  'application/x-tar': './assets/images/ft_ic_archive.svg',
  'application/vnd.apple.keynote': './assets/images/ft_ic_presentation.svg',
  'application/vnd.apple.pages': './assets/images/ft_ic_document.svg',
  'application/vnd.apple.numbers': './assets/images/ft_ic_spreadsheet.svg',
  'application/vnd.visio': './assets/images/ft_ic_document.svg',
  'application/wordperfect': './assets/images/ft_ic_document.svg',
  'application/x-cpio': './assets/images/ft_ic_document.svg',
  folder: './assets/images/ft_ic_folder.svg',
  smartFolder: './assets/images/ft_ic_smart_folder.svg',
  ruleFolder: './assets/images/ft_ic_folder_rule.svg',
  linkFolder: './assets/images/ft_ic_folder_shortcut_link.svg',
  'disable/folder': './assets/images/ft_ic_folder_disable.svg',
  selected: './assets/images/ft_ic_selected.svg',
  'dynamic-feed': './assets/images/dynamic_feed-24px.svg',
  'ic-process': './assets/images/ic-process.svg',
  filter: './assets/images/ft_ic_filter.svg',
  'save-as': './assets/images/save-as.svg',
  save: './assets/images/save.svg',
  task: './assets/images/task.svg'
};
