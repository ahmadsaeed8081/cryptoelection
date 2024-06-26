import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../Button";
import VideoPlayer from "../videoPlayer";
const BuyCrypto = () => {
  return (
    <div className="tw-bg-Hero tw-h-auto  tw-bg-cover tw-bg-[#111a3a]">
      <div className="container tw-py-14">
        <h3 className="tw-text-white tw-text-center tw-font-zen-dots sm:tw-text-[45px] tw-text-[30px]">
          How to Buy Crypto Election
        </h3>

        <div className="row tw-items-center g-5 tw-pt-12">
          <div className="col-md-6">
            <h2 className="tw-text-white tw-pb-5 tw-font-zen-dots">
              Benefits
            </h2>

            <div className=" tw-border-[#D40000]  sm:tw-ml-0 tw-ml-6  tw-border-l-4 tw-border-dashed ">
              <div className=" tw-flex tw-h-full -tw-translate-x-7 tw-flex-col tw-justify-between">

                {/* Step 01 */}
                <div className="tw-flex tw-gap-7 tw-items-start">
                  <div className="tw-bg-button-gradient tw-w-[55px] tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[55px] tw-text-white">
                    <span className="tw-text-xl">01</span>
                  </div>
                  <div className="tw-flex-1 sm:tw-pl-5 tw-pl-0">
                    <h3 className="tw-font-zen-dots sm:tw-text-[35px] tw-text-[20px] tw-text-white">Connect Your Wallet</h3>
                    <p className="tw-font-poppins tw-text-[18px] tw-text-white sm:tw-text-lg tw-text-sm">Download a compatible cryptocurrency wallet. Visit our website and connect your digital wallet.</p>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="tw-flex tw-gap-7 tw-pt-5 tw-items-start">
                  <div className="tw-bg-button-gradient tw-w-[55px] tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[55px] tw-text-white">
                    <span className="tw-text-xl">02</span>
                  </div>
                  <div className="tw-flex-1 sm:tw-pl-5 tw-pl-0">
                    <h3 className="tw-font-zen-dots tw-text-white sm:tw-text-[35px] tw-text-[20px]">Set Up Your Wallet</h3>
                    <p className="tw-font-poppins tw-text-[18px] sm:tw-text-lg tw-text-sm tw-text-white">Set up your wallet and securely store your private keys and recovery phrases.</p>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="tw-flex tw-pt-5 tw-gap-7 tw-items-start">
                  <div className="tw-bg-button-gradient tw-w-[55px] tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[55px] tw-text-white">
                    <span className="tw-text-xl">03</span>
                  </div>
                  <div className="tw-flex-1 sm:tw-pl-5 tw-pl-0">
                    <h3 className="tw-font-zen-dots tw-text-white sm:tw-text-[35px] tw-text-[20px]">Fund Your Wallet</h3>
                    <p className="tw-font-poppins tw-text-[18px] sm:tw-text-lg tw-text-sm tw-text-white">Transfer cryptocurrency (such as ETH or USDT) to your wallet. You can buy these from popular exchanges like Coinbase, Binance, or Kraken.</p>
                  </div>
                </div>

                {/* Step 04 */}
                <div className="tw-flex tw-pt-5 tw-gap-7 tw-items-start">
                  <div className="tw-bg-button-gradient tw-w-[55px] tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[55px] tw-text-white">
                    <span className="tw-text-xl">04</span>
                  </div>
                  <div className="tw-flex-1 sm:tw-pl-5 tw-pl-0">
                    <h3 className="tw-font-zen-dots tw-text-white sm:tw-text-[35px] tw-text-[20px]">Buy CEC Tokens</h3>
                    <p className="tw-font-poppins tw-text-white tw-text-[18px] sm:tw-text-lg tw-text-sm">Visit our website and click on the "Buy Crypto Election Token" button. Enter the amount of Crypto Election Tokens you wish to buy, review the details, and confirm your purchase.</p>
                  </div>
                </div>

                {/* Step 05 */}
                <div className="tw-flex tw-pt-5 tw-gap-7 tw-items-start">
                  <div className="tw-bg-button-gradient tw-w-[55px] tw-flex tw-justify-center tw-items-center tw-rounded-full tw-h-[55px] tw-text-white">
                  <IoIosCheckmarkCircle size={35} className=" tw-text-white" />
                  </div>
                  <div className="tw-flex-1 sm:tw-pl-5 tw-pl-0">
                    <Button label={'Buy Now'} className={' tw-w-44'} />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row  tw-pt-11">
              <div className="col-md-10  tw-relative tw-mx-auto">
                {/* <img src={require("../../assets/images/buy_crypto.png")} className="img-fluid" alt="Benefits" /> */}
                <VideoPlayer src={require('../../assets/images/video2.mp4')} className="" />
                {/* <div className="tw-absolute tw-top-[45%] tw-left-[40%]">
                  <img src={require("../../assets/images/player.png")} className="img-fluid" alt="Benefits" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCrypto;
