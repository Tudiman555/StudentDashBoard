import { Transition } from "@headlessui/react";
import { title } from "process";
import React, { Fragment } from "react";
import { useState } from "react";
import Coffee025 from "./025.webp";
import Coffee050 from "./050.webp";
import Coffee150 from "./150.webp";
import Coffee200 from "./200.webp";
import Coffee400 from "./400.webp";

interface starObj {
  title: number;
  titleImage: any;
  titleHeading: string;
  titleDescription: string;
}

interface Props {
  values?: starObj[];
}
const StarTabs: React.FC<Props> = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  console.log(selectedTab);
  const underlineTab = 100 / props.values!.length;
  return (
    <>
      <div className="relative pb-1 mx-auto md:max-w-md">
        <div className="flex">
          {props.values!.map((title, key) => (
            <button
              onClick={() => setSelectedTab(key)}
              className="flex-1 p-2 pb-4 font-semibold tracking-wide text-19p md:text-2xl min-w-max"
            >
              {title.title}
              {props.children}
            </button>
          ))}
        </div>
        <div
          style={{
            width: underlineTab + "%",
            left: underlineTab * selectedTab + "%",
          }}
          className="absolute h-1 duration-500 ease-in-out bg-primary-300"
        ></div>
      </div>
      <div className="flex flex-col items-center justify-center pb-12 md:py-8 md:flex-row bg-primary-200">
        <div className="py-8 md:w-96 md:py-0 md:mr-5">
          <img src={props.values![selectedTab].titleImage} alt="" />
        </div>
        <div className="px-4 text-center md:text-left md:w-96">
          <h4 className="pb-4 text-2xl font-semibold text-19p md:text-2xl">
            {props.values![selectedTab].titleHeading}
          </h4>
          <p className="text-sm md:text-base">{props.values![selectedTab].titleDescription}</p>
        </div>
      </div>
    </>
  );
};

StarTabs.defaultProps = {
  values: [
    {
      title: 25,
      titleImage: Coffee025,
      titleHeading: "Customize your drink",
      titleDescription:
        "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
    },
    {
      title: 50,
      titleImage: Coffee050,
      titleHeading: "Brewed hot coffee, bakery item or hot tea",
      titleDescription:
        "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
    },
    {
      title: 150,
      titleImage: Coffee150,
      titleHeading: "Handcrafted drink, hot breakfast or parfait",
      titleDescription:
        "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
    },
    {
      title: 200,
      titleImage: Coffee200,
      titleHeading: "Salad, sandwich or protein box",
      titleDescription:
        "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
    },
    {
      title: 400,
      titleImage: Coffee400,
      titleHeading: "Select merchandise or at-home coffee",
      titleDescription:
        "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
    },
  ],
};
export default StarTabs;
