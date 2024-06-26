import React from "react";

const RoadMap = () => {
  return (
    <div id="roadSection" className="  tw-relative sm:tw-pb-80 tw-pb-12 tw-px-4 md:tw-px-8 lg:tw-px-16 tw-py-12">
      <div className="container">
        <h1 className="tw-text-black tw-text-center tw-font-semibold md:tw-text-[45px] tw-text-[35px]">
          Roadmap
        </h1>

        <p className="tw-text-center tw-font-poppins tw-pt-5">
          We will implement the crypto elections to all major elections worldwide moving forward.
        </p>
        
        <div className="tw-relative tw-pt-10 sm:tw-block tw-hidden">
          <img
            src={require("../../assets/images/card_bg_t.png")}
            className="tw-mx-auto xl:tw-block tw-hidden tw-mt-2 tw-h-[234px] tw-max-w-full"
            alt="Background"
          />

          <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-10 tw-pt-10">
            <div className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-px-4 tw-py-2 tw-flex tw-flex-col tw-items-center  lg:tw-absolute  tw-relative xl:-tw-left-5  -tw-left-5 tw-top-5">
              <div className="sm:tw-w-[139px] tw-w-[56px] sm:tw-h-[135px] tw-h-[56px]  tw-gradient-background tw-shadow-right-bottom-[#6E0000] tw-shadow-[#6E0000]  tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-bg-[#F4F4F4] sm:tw-rounded-2xl tw-rounded-lg">
                <h2 className="gradient-text sm:tw-text-3xl tw-m-0 tw-text-[15px] tw-font-zen-dots">01</h2>
              </div>
              <h3 className="tw-font-zen-dots tw-pt-3 sm:tw-text-3xl tw-text-base md:tw-pt-10">Week 1</h3>
              <p className="tw-text-black sm:tw-text-base tw-text-xs tw-font-poppins tw-text-center">
                Finalize tokenomics, smart contract development, and conduct internal audits. Launch marketing campaigns to create awareness and engage potential investors.
              </p>
            </div>

            <div className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-px-4 tw-py-2 tw-flex tw-flex-col tw-items-center lg:tw-absolute  inline-block tw-left-[21%] tw-top-[70%]">
              <div className="sm:tw-w-[139px] tw-w-[56px] sm:tw-h-[135px] tw-h-[56px] tw-flex tw-justify-center tw-items-center tw-bg-[#F4F4F4] tw-rounded-2xl  tw-gradient-background tw-shadow-right-bottom-[#6E0000] tw-shadow-[#6E0000]  tw-shadow-lg">
                <h2 className="gradient-text sm:tw-text-3xl tw-m-0 tw-text-[15px] tw-font-zen-dots">02</h2>
              </div>
              <h3 className="tw-font-zen-dots tw-pt-6 md:tw-pt-10">Week 2</h3>
              <p className="tw-text-black tw-font-poppins tw-text-center">
              Officially launch the presale phase of CEC and monitor progress.
              Allocate resources towards development and testing of voting and lottery functionalities.
              </p>
            </div>

            <div className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-px-4 tw-py-2 tw-flex tw-flex-col tw-items-center lg:tw-absolute  inline-block tw-left-[50%] tw-top-5">
              <div className="sm:tw-w-[139px] tw-w-[56px] sm:tw-h-[135px] tw-h-[56px] tw-flex tw-justify-center tw-items-center tw-bg-[#F4F4F4] tw-rounded-2xl  tw-gradient-background tw-shadow-right-bottom-[#6E0000] tw-shadow-[#6E0000]  tw-shadow-lg">
                <h2 className="gradient-text sm:tw-text-3xl tw-m-0 tw-text-[15px] tw-font-zen-dots">03</h2>
              </div>
              <h3 className="tw-font-zen-dots tw-pt-6 md:tw-pt-10">Week 3</h3>
              <p className="tw-text-black tw-font-poppins tw-text-center">
              Collaborate with developers to integrate voting and lottery mechanisms.
              Conduct extensive testing and gather feedback from the community.              </p>
            </div>

            <div className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-px-4 tw-py-2 tw-flex tw-flex-col tw-items-center lg:tw-absolute  inline-block xl:tw-right-0 -tw-right-10  tw-top-[60%]">
              <div className="sm:tw-w-[139px] tw-w-[56px] sm:tw-h-[135px] tw-h-[56px] tw-flex tw-justify-center tw-items-center tw-bg-[#F4F4F4] tw-rounded-2xl  tw-gradient-background tw-shadow-right-bottom-[#6E0000] tw-shadow-[#6E0000]  tw-shadow-lg">
                <h2 className="gradient-text sm:tw-text-3xl tw-m-0 tw-text-[15px] tw-font-zen-dots">04</h2>
              </div>
              <h3 className="tw-font-zen-dots tw-pt-6 md:tw-pt-10">Week 4</h3>
              <p className="tw-text-black tw-font-poppins tw-text-center">
              Launch voting and lottery implementation phase.
Draw lottery winners on Election Day.
Gather feedback, celebrate successful launch, and plan for future enhancements.              </p>
            </div>
          </div>
        </div>
         

     {/* Mobile view */}
<div className="sm:tw-hidden tw-block">
  <div className="tw-relative">
    <div className="tw-grid tw-grid-cols-2">
      <div className="tw-text-center tw-px-5">
        <div className="tw-w-[56px] tw-mx-auto tw-h-[56px] tw-gradient-background tw-shadow-right-bottom-[#6E0000] tw-shadow-[#6E0000] tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-bg-[#F4F4F4] sm:tw-rounded-2xl tw-rounded-lg">
          <h2 className="gradient-text tw-m-0 tw-text-[15px] tw-font-zen-dots">01</h2>
        </div>
        <h3 className="tw-font-zen-dots tw-pt-3 sm:tw-text-3xl tw-text-sm md:tw-pt-10">Week 1</h3>
        <p className="tw-text-black sm:tw-text-base tw-text-[8px] tw-font-poppins tw-text-center">
          Finalize tokenomics, smart contract development, and conduct internal audits. Launch marketing campaigns to create awareness and engage potential investors.
        </p>
      </div>

      <div className="tw-text-center tw-px-5">
        <div className="tw-w-[56px] tw-mx-auto tw-h-[56px] tw-gradient-background tw-shadow-right-bottom-[#6E0000] tw-shadow-[#6E0000] tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-bg-[#F4F4F4] sm:tw-rounded-2xl tw-rounded-lg">
          <h2 className="gradient-text tw-m-0 tw-text-[15px] tw-font-zen-dots">02</h2>
        </div>
        <h3 className="tw-font-zen-dots tw-pt-3 sm:tw-text-3xl tw-text-sm md:tw-pt-10">Week 2</h3>
        <p className="tw-text-black sm:tw-text-base tw-text-[8px] tw-font-poppins tw-text-center">
          Officially launch the presale phase of CEC and monitor progress. Allocate resources towards development and testing of voting and lottery functionalities.
        </p>
      </div>
    </div>

    <div className="tw-absolute tw-inset-x-0 tw-top-6 -tw-z-10">
      <img src={require('../../assets/images/Line_l.png')} className="tw-mx-auto" />
    </div>

    <div className="tw-grid tw-grid-cols-2">
      <div className="tw-text-center tw-px-5">
        <div className="tw-w-[56px] tw-mx-auto tw-h-[56px] tw-gradient-background tw-shadow-right-bottom-[#6E0000] tw-shadow-[#6E0000] tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-bg-[#F4F4F4] sm:tw-rounded-2xl tw-rounded-lg">
          <h2 className="gradient-text tw-m-0 tw-text-[15px] tw-font-zen-dots">03</h2>
        </div>
        <h3 className="tw-font-zen-dots tw-pt-3 sm:tw-text-3xl tw-text-sm md:tw-pt-10">Week 3</h3>
        <p className="tw-text-black sm:tw-text-base tw-text-[8px] tw-font-poppins tw-text-center">
          Collaborate with developers to integrate voting and lottery mechanisms. Conduct extensive testing and gather feedback from the community.
        </p>
      </div>

      <div className="tw-text-center tw-px-5">
        <div className="tw-w-[56px] tw-mx-auto tw-h-[56px] tw-gradient-background tw-shadow-right-bottom-[#6E0000] tw-shadow-[#6E0000] tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-bg-[#F4F4F4] sm:tw-rounded-2xl tw-rounded-lg">
          <h2 className="gradient-text tw-m-0 tw-text-[15px] tw-font-zen-dots">04</h2>
        </div>
        <h3 className="tw-font-zen-dots tw-pt-3 sm:tw-text-3xl tw-text-sm md:tw-pt-10">Week 4</h3>
        <p className="tw-text-black sm:tw-text-base tw-text-[8px] tw-font-poppins tw-text-center">
          Launch voting and lottery implementation phase. Draw lottery winners on Election Day. Gather feedback, celebrate successful launch, and plan for future enhancements.
        </p>
      </div>
    </div>

    <div className="tw-absolute tw-inset-x-0 tw-top-6 -tw-z-10">
      <img src={require('../../assets/images/Line_l.png')} className="tw-mx-auto" />
    </div>
    <div className="tw-absolute tw-inset-x-0 tw-bottom-44 -tw-z-10">
      <img src={require('../../assets/images/Line_l.png')} className="tw-mx-auto" />
    </div>
  </div>
</div>
       


      </div>

      <div className=" sm:tw-block tw-hidden tw-absolute tw-bottom-0 tw-right-0">
        <img src={require('../../assets/images/road_map_bg.png')} />
      </div>
    </div>
  );
};

export default RoadMap;
