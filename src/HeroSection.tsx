import React from "react";
import RoundedLink from "./RoundedLink";

interface Props {}

const HeroSection: React.FC<Props> = (props) => {
  return (
    <>
      <div className=" aspect-w-3 aspect-h-4 md:aspect-w-12 md:aspect-h-7 mb-72p md:mb-32">
        <div className="flex bg-cover bg-primary-200 bg-heromobile md:bg-herodesktop md:bg-center md:justify-start md:items-center">
          <div className="max-w-md px-6 py-8 mx-auto text-center md:text-left md:w-6/12 md:mx-0 lg:px-10">
            <h1 className="font-semibold leading-9 text-head1 md:text-4xl">
              FREE COFFEE
              <br />
              IS A TAP AWAY
            </h1>
            <div className="pt-4">
              <p className="font-medium md:text-lg ">
                Join now to start earning Rewards.
              </p>
            </div>
            <div className="pt-8 ">
              <RoundedLink
                linkUrl="#"
                linkName="Join Now"
                theme="hidden bg-primary-300 text-white text-base md:inline-block"
              />
              <RoundedLink
                linkUrl="#"
                linkName="Join in the app"
                theme="bg-primary-300 text-white md:hidden"
              />
              <a
                href="#"
                className="block mt-4 font-medium underline hover:no-underline md:hidden"
              >
                {" "}
                or join online
              </a>
              <span className="hidden mt-4 text-lg font-medium md:block">
                Or <a href="#" className="underline hover:no-underline ">join in the app</a> for the best experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HeroSection.defaultProps = {};
export default HeroSection;
