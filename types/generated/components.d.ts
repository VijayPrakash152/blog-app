import type { Schema, Struct } from '@strapi/strapi';

export interface SeoKeyword extends Struct.ComponentSchema {
  collectionName: 'components_seo_keywords';
  info: {
    displayName: 'Keyword';
  };
  attributes: {
    keyword: Schema.Attribute.String;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keywords: Schema.Attribute.Component<'seo.keyword', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.keyword': SeoKeyword;
      'seo.metadata': SeoMetadata;
    }
  }
}
