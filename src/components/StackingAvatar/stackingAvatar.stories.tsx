import "../../index.css";
import avatar from "../Avatar/avatar";
import StackingAvatar from "./stackingAvatars";


export default {
    
  title : "Stacking Avatar",
  component : StackingAvatar,
  argTypes: {
      maxUserToDisplay: {
        control: { type: "range", max : 10, min : 1 },
      },
  },

}

const Template = (args:any) =><StackingAvatar {...args}></StackingAvatar>;

export const main:any = Template.bind({});


main.args = {
  avatarUrls : ["https://pbs.twimg.com/profile_images/1060274716043345923/jVSWVi9g_400x400.jpg",
  "https://artfiles.alphacoders.com/125/125164.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxN8dKD4P9QL3IpbuGH8tBPhEVbBySgo3w0w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqVJ4lmhiOnWI43pGSNDQFmXCUs0UDflVkA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYc1U9rWvVaaU4_oHTwW18Cxbe0eONgfP-Q&usqp=CAU",]
}



