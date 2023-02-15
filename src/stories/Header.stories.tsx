import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from "../Header/Header";
import AlienProvider from "../AlienProvider/AlienProvider";

export default {
    title: 'Example/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <AlienProvider><Header {...args} /></AlienProvider>;

export const HeaderTemplate = Template.bind({});
HeaderTemplate.args = {
    menu: [
        {
            name: 'Main',
            link: '/',
            isActive: true
        },
        {
            name: 'About us',
            link: '/about',
            isActive: false
        },
        {
            name: 'Catalog',
            link: '/catalog',
            isActive: false
        },
        {
            name: 'Contacts',
            link: '/contacts',
            isActive: false
        }
    ],
    logo: {
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png',
        altText: 'CocaCola',
        imgWidth: "120"
    },
    isSearch: true
};
