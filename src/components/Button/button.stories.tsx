import "../../index.css"
import  Button  from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['solid', 'outlined'],
      control: { type: 'radio' }
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
    type : "submit",
    theme : "Solid",
    buttonDisabled : false,

};

