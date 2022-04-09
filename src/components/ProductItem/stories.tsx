import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProductItem } from ".";

export default {
  title: 'ProductItem',
  component: ProductItem,
  argTypes: {
    name: { control: 'string' },
    description: { control: 'string' },
  },
  args: {
    name: 'Test name sua mae',
    description: 'Test description',
  }
} as ComponentMeta<typeof ProductItem>;

export const Basic: ComponentStory<typeof ProductItem> = args => <ProductItem {...args} />
