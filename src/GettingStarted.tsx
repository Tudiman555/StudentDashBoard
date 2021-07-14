import React from "react";
import GettingStartedSteps from "./GettingStartedSteps";
export interface Data {
  stepNo? : number;
  stepImage? : any;
  child : React.ReactNode;
}
interface Props {
  values : Data[];
  mainHeading : string;
  headingDesc : string;
}

const GettingStarted: React.FC<Props> = ({values , mainHeading , headingDesc,...rest}) => {
  return (
    <>
      <div className="px-4 md:px-6 mb-72p md:mb-32">
        <h2 className="text-2xl font-semibold text-center md:text-head1">
          {mainHeading}
        </h2>
        <p className="pt-4 text-sm text-center md:text-base">
          {headingDesc}
        </p>
        <div className="flex flex-col justify-center pt-12 md:flex-row md:mx-auto">
          
          <GettingStartedSteps
            
          >
            <p>
              Join in the app to get access to the full range of Starbucks®
              Rewards benefits. You can also join online.
            </p>
          </GettingStartedSteps>
        </div>
      </div>
    </>
  );
};

GettingStarted.defaultProps = {};
export default GettingStarted;
