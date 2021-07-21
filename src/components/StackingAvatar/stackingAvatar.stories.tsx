import "../../index.css";
import StackingAvatar from "./stackingAvatars";
import Avatar from "../Avatar/avatar";
import Tom from "../../images/Tom.jpg"

const avatar = <Avatar onlineStatus={undefined} image={Tom}></Avatar>;
const av = [avatar, avatar, avatar, avatar, avatar];
export default {
    title : "Stacking Avatar",
    component : StackingAvatar,
    argTypes: {
        maxUserToDisplay: {
          control: { type: "range", max : av.length, min : 1 },
        },
    },

}

const Template = (args:any) =><StackingAvatar {...args}></StackingAvatar>;

export const main:any = Template.bind({});
