import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardTestimonials, {CardProps} from './index';

export default {
  title: 'Componente Card dos Testimonials',
  componente: CardTestimonials,
} as Meta;

const Template: Story<CardProps> = (args) => <CardTestimonials {...args}/>

export const Person = Template.bind({}); 
Person.args = {
  photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  name: "John Fang",
  website: 'wordfaang.com',
  text: "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
}