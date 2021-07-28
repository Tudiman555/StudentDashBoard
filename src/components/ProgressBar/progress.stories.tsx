import ProgressBar from "./ProgressBar";
import "../../index.css";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: {
        type: "range",
        max: 100,
        min: 0,
      },
    },
  },
};

const Template = (args: any) => <ProgressBar {...args}></ProgressBar>;

export const main: any = Template.bind({});
