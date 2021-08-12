import "../../index.css"
import  Button  from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonStyle: {
      options: ['Solid', 'Outlined'],
      control: { type: 'radio' }
    },
    theme : {
      options : ["Primary","Warning","Dark"],
      control : {type : "select"}    
    },
    type: {
        options: ['submit', 'button'],
        control: { type: 'radio' }
    }
  }
}

const Template = (args:any) => <Button {...args}></Button>;

export const main:any = Template.bind({});

main.args = {
    title:"Sign in",
    disabled : false,

};

