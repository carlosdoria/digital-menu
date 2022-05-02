import { Story, Meta } from '@storybook/react/types-6-0';

import { Product, ProductProps } from './';

export default {
  title: 'Product',
  component: Product,
  argTypes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'number'
    },
    urlImg: {
      type: 'string'
    },
  }
} as Meta;

export const Default: Story<ProductProps> = args => <Product {...args} />;

Default.args = {
  title: 'Prato',
  description: 'Prato principal',
  price: 30,
  urlImg: 'https://source.unsplash.com/user/willianjusten/151x70',
}
