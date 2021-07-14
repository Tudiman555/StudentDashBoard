import React from "react";
import StarTabs from "./StarTabs";
interface Props {}

const RedeemCoffee: React.FC<Props> = (props) => {
  return (
    <>
      <div className="pt-12 mb-72p md:mb-32 bg-primary-100">
        <h2 className="pb-4 text-2xl font-semibold text-center md:pb-12 md:text-28p">
          Get your favorites for free
        </h2>
        <StarTabs >
            <span className="text-sm text-golden md:text-base">★</span>
        </StarTabs>
      </div>
    </>
  );
};

RedeemCoffee.defaultProps = {};
export default RedeemCoffee;
