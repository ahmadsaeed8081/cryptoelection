import React from "react";
import VideoPlayer from "../videoPlayer";

const EBM_Avenue = () => {
  return (
    <div className="tw-pt-44">
      <div className="container tw-py-14">
        <h3 className="tw-text-white tw-text-center tw-font-zen-dots gradient-text md:tw-text-[45px] tw-text-[28px]">
          Importance of Crypto Election
        </h3>

        <p className="tw-text-center tw-font-poppins tw-pt-5">
          Crypto Election Coin represents a paradigm shift in the way voting is conducted, offering a secure, transparent, and inclusive platform for participants to actively engage in the United States presidential election and other future world elections. By harnessing the power of blockchain technology and incentivizing voter participation through a lottery system, CEC aims to enhance the integrity and accessibility of the democratic process. Join us in shaping the future of democracy with Crypto Election Coin.
        </p>

        <div className="row g-5 tw-pt-20">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-10 tw-mx-auto tw-relative">
                <VideoPlayer src={require('../../assets/images/video1.mp4')} className="" />
                {/* <img src={require("../../assets/images/benefits.png")} className="img-fluid" alt="Benefits" /> */}
                {/* <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
                  <img src={require("../../assets/images/player.png")} className="img-fluid" alt="Player" />
                </div> */}
                <div className="tw-absolute sm:tw-block tw-hidden  -tw-left-7 -tw-top-12 tw-flex tw-items-center tw-justify-center">
                  <img src={require("../../assets/images/b_line.png")} className="img-fluid" alt="Player" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <h2 className="tw-text-black tw-pb-5 tw-font-zen-dots">
              Benefits
            </h2>

            <div className=" tw-border-[#D40000] sm:tw-ml-0 tw-ml-6  tw-border-l-4 tw-border-dashed lg:tw-h-64 tw-h-auto     tw-pb-8">
              <div className="tw-flex tw-flex-col  -tw-translate-x-7 tw-justify-between tw-h-full">
                <div className="tw-flex tw-gap-7 tw-items-start">
                  <div className="tw-bg-button-gradient tw-w-[55px] tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[55px]">
                    <span className="tw-text-white tw-font-zen-dots tw-text-xl">01</span>
                  </div>
                  <div className="tw-flex-1 tw-font-poppins tw-text-[18px]">
                    <b className="tw-text-[#D40000]">Security:</b> Utilizing blockchain technology ensures the immutability and transparency of the voting process, safeguarding against tampering and fraud.
                  </div>
                </div>
                <div className="tw-flex tw-gap-7 tw-pt-8 tw-items-start">
                  <div className="tw-bg-button-gradient tw-w-[55px] tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[55px]">
                    <span className="tw-text-white tw-font-zen-dots tw-text-xl">02</span>
                  </div>
                  <div className="tw-flex-1 tw-font-poppins tw-text-[18px]">
                    <b className="tw-text-[#D40000]">Accessibility:</b> CEC enables individuals from diverse backgrounds to participate in the democratic process, regardless of geographical location or socioeconomic status.
                  </div>
                </div>
                <div className="tw-flex tw-pt-8 tw-gap-7 tw-items-start">
                  <div className="tw-bg-button-gradient tw-w-[55px] tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[55px]">
                    <span className="tw-text-white tw-font-zen-dots tw-text-xl">03</span>
                  </div>
                  <div className="tw-flex-1 tw-font-poppins tw-text-[18px]">
                    <b className="tw-text-[#D40000]">Incentivization:</b> The lottery mechanism incentivizes voter participation, encouraging more individuals to engage in the electoral process and exercise their democratic rights.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default EBM_Avenue;
