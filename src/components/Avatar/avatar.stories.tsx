import "../../index.css";
import Avatar from "./avatar";
import Tushar from "../../images/Tushar.jpg";
import Tom from "../../images/Tom.jpg";


const images = {Tushar,Tom}
export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    onlineStatus: {
      options: [true, false, undefined],
      control: { type: "radio" },
    },
    image: {
        options:Object.keys(images),
        mapping : images,
        control: { type: "radio" },
      },
  },
};

const Template = (args: any) => <Avatar {...args}></Avatar>;

export const main: any = Template.bind({});
