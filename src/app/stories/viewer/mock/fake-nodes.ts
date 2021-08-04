import { NodeChildAssociationPaging, NodeEntry } from '@alfresco/js-api';

const textNode = new NodeEntry({ 
    entry: { 
        isFile: true, 
        createdByUser: { id: 'admin', displayName: 'Administrator' },
        modifiedByUser: { id: 'admin', displayName: 'Administrator' },
        name: 'node_file.txt', 
        content: {  'mimeType': 'text/plain',
                    'mimeTypeName': 'Text',
                    'sizeInBytes': 1230,
                    'encoding': 'UTF-8'}, 
        contentUrl: './assets/texts/node_file.txt',
        id: 'node_file',
        modifiedAt: '2021-05-24T15:08:32.640Z'
    } 
});

const loremIpsumTextNode = new NodeEntry({ 
    entry: { 
        isFile: true, 
        createdByUser: { id: 'admin', displayName: 'Administrator' },
        modifiedByUser: { id: 'admin', displayName: 'Administrator' },
        name: 'lorem_ipsum.txt', 
        content: {  'mimeType': 'text/plain',
                    'mimeTypeName': 'Text',
                    'sizeInBytes': 3333,
                    'encoding': 'UTF-8'}, 
        contentUrl: './assets/fake_folder/lorem_ipsum.txt',
        id: 'lorem_ipsum_text',
        modifiedAt: '2018-03-21T15:11:55.640Z',
    } 
});

const loremIpsumPdfNode = new NodeEntry({ 
    entry: { 
        isFile: true, 
        createdByUser: { id: 'admin', displayName: 'Administrator' },
        modifiedByUser: { id: 'admin', displayName: 'Administrator' },
        name: 'lorem_ipsum.pdf', 
        content: {  'mimeType': 'application/pdf',
                    'mimeTypeName': 'Adobe Portable Document Format',
                    'sizeInBytes': 21301,
                    'encoding': 'UTF-8'}, 
        contentUrl: './assets/fake_folder/lorem_ipsum.pdf',
        id: 'lorem_ipsum_pdf',
        modifiedAt: '2020-12-24T15:05:59.640Z',
    } 
});

const alfrescoLogoNode = new NodeEntry({ 
    entry: { 
        isFile: true, 
        createdByUser: { id: 'admin', displayName: 'Administrator' },
        modifiedByUser: { id: 'admin', displayName: 'Administrator' },
        name: 'favicon-96x96.png', 
        content: {  'mimeType': 'image/png',
                    'mimeTypeName': 'Portable Network Graphics',
                    'sizeInBytes': 21290}, 
        contentUrl: './assets/fake_folder/favicon-96x96.png',
        id: 'alfresco_logo',
        modifiedAt: '2017-05-24T15:08:55.640Z',
    } 
});

export const fakeFolderNodeAnswer = new NodeChildAssociationPaging ({
    list: {
        pagination: {
            count: 4,
            hasMoreItems: false,
            totalItems: 14,
            skipCount: 10,
            maxItems: 10
        },
        entries: [loremIpsumTextNode, loremIpsumPdfNode, alfrescoLogoNode]
    }
});

export const nodesIds = {
    node_file: textNode,
    lorem_ipsum_text: loremIpsumTextNode,
    lorem_ipsum_pdf: loremIpsumPdfNode,
    alfresco_logo: alfrescoLogoNode,
}