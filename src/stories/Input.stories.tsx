import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from "../Input/Input";

export default {
    title: 'Example/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLogin = Template.bind({});
InputLogin.args = {
    placeholder: "Type something",
    inputSize: 'lg',
    label: 'Name',
    widthBlock: 500,
    type: "password",
    inputStyle: "filled"
};
