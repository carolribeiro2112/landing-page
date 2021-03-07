import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CardFeature,{FeatureProps} from './index';
// import Image03 from '../../assets/image_03.svg';
// import Image04 from '../../assets/image_04.svg';
// import Image05 from '../../assets/image_05.svg';
// import Image06 from '../../assets/image_06.svg';


export default {
  title: 'Componente Card das Features',
  componente: CardFeature,
} as Meta;

const Template: Story<FeatureProps> = (args) => <CardFeature {...args}/>

export const SearchData = Template.bind({}); 
SearchData.args = {
  img: '../../assets/image_03.svg',
  backgroundColor: "rgba(104,201,186,0.1)",
  title: "Search Data",
  text: "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
}

export const Access = Template.bind({});
Access.args = {
  img: "../../assets/image_04.svg",
  backgroundColor: "rgba(156,105,226,0.1)",
  title: "24 Hours Access",
  text: "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent"
}

export const PrintOut = Template.bind({});
PrintOut.args = {
  img: "../../assets/image_05.svg",
  backgroundColor: "rgba(240,99,184,0.1)",
  title: "Print Out",
  text: "Print out service gives you convenience if someday you need print data, just edit it all and just print it."
}

export const SecurityCode = Template.bind({});
SecurityCode.args = {
  img: "../../assets/image_06.svg",
  backgroundColor: "rgba(45,156,219,0.1)",
  title: "Security Code",
  text: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file."
}