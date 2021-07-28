import "../../index.css"
import  Alert  from './Alert';

export default {
  title: 'Alert',
  component: Alert,
}

const Template = (args:any) => <Alert {...args}></Alert>;

export const main:any = Template.bind({});


