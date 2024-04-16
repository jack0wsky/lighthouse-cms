import type { Schema, Attribute } from '@strapi/strapi';

export interface ValueValue extends Schema.Component {
  collectionName: 'components_value_values';
  info: {
    displayName: 'Value';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    icon: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'value.value': ValueValue;
    }
  }
}
