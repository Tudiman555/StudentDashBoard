import "../../index.css"
import  Input  from './input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
   
  }
}

const Template = (args:any) => <Input {...args}></Input>;

export const main:any = Template.bind({});

main.args = {
    error : "Please Enter This Field",
    touched : false,
    placeholder : "Email"
};

