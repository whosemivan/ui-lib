import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from "../Button/Button";

export default {
    title: 'Example/MyButton',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
    size: 'sm',
    designStyle: 'solid',
    bgColor: '#36D8FF',
    children: 'Какой то текст'
};
