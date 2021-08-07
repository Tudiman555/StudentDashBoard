import "../../index.css";
import Avatar from "./Avatar";


export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    onlineStatus: {
      options: [true, false, undefined],
      control: { type: "radio" },
    },
    
  },
};

const Template = (args: any) => <Avatar {...args}></Avatar>;

export const main: any = Template.bind({});
main.args = {
  imageUrl: "https://pbs.twimg.com/profile_images/1060274716043345923/jVSWVi9g_400x400.jpg",
}
