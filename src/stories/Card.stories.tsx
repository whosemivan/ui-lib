import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from "../Card/Card";

export default {
    title: 'Example/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardExample = Template.bind({});
CardExample.args = {
    title: 'Card title',
    description: 'Description',
    link: 'vk.com',
    widthBlock: 400,
    heightBlock: 400
};
