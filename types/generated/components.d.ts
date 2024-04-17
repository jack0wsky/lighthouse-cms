import type { Schema, Attribute } from '@strapi/strapi';

export interface ListItemsValue extends Schema.Component {
  collectionName: 'components_value_values';
  info: {
    displayName: 'Value';
    description: '';
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
      'list-items.value': ListItemsValue;
    }
  }
}
