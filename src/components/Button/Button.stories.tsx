import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button,{ButtonProps} from './index';

export default {
  title: 'Componente Button',
  componente: Button,
}as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}/>

export const LearnMoreFooter = Template.bind({});
LearnMoreFooter.args = {
  name:"Learn more",
  backgroundColor:"#F063B8",
}

export const RequestDemo = Template.bind({});
RequestDemo.args = {
  name:"Request Demo",
  color:"#212353", 
  shadow:"5px 5px 5px rgba(0,0,0,0.1)",
}

export const LearnMoreHeadline = Template.bind({});
LearnMoreHeadline.args = {
  name:"Learn more",
  backgroundColor:"#9C69E2",
}
