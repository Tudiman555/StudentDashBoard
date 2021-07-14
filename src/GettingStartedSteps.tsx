import React from "react";
import {Data} from "./GettingStarted";

interface Props {
    value ?: Data;
}

const GettingStartedSteps : React.FC<Props> = ({value}) => {
    const image = value!.stepImage ? "" : "hidden";
    const step = value!.stepNo ? "": "hidden";
  return (
     <>
        <div className="flex pb-8 md:flex-col md:text-center md:pb-0 md:mx-6 md:w-3/12">
            <div className="pr-4 text-2xl md:mx-auto md:flex-grow-0 md:pr-0 md:pb-6 ">
                <h2 className="px-4 py-2 font-bold border-2 rounded-3xl border-primary-300 text-primary-300">{ }</h2>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2 className="text-base font-semibold md:text-19p">{}</h2>
                <div className="pt-4 text-sm md:text-base">{}</div>
            </div>
        </div>
     </>
  );
};

GettingStartedSteps.defaultProps = {
}
export default GettingStartedSteps;
