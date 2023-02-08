import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid from "../Grid/Grid";

export default {
    title: 'Example/Grid',
    component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const GridExample = Template.bind({});
GridExample.args = {
    templateColumns: 'repeat(5, 1fr)',
    templateRows: 'repeat(2, 1fr)',
    gap: 10
};
