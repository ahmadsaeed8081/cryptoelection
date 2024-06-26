import React, { useState } from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";
import Header from "../header";
import Counter from "../Counter";
import VideoPlayer from "../videoPlayer";
const Hero = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const getBorderColor = (currency) => {
    return selectedCurrency === currency
      ? "tw-border-[#A30000] tw-border-2"
      : " tw-border-white tw-border-2";
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleBSelect = (button) => {
    setSelectedButton(button);
  };

  const getBBorderColor = (button) => {
    return selectedButton === button
      ? "tw-border-[#00F0FF] tw-border-2"
      : "tw-border-white";
  };

  const openPdfInNewTab = () => {
    const pdfUrl = require("https://my.visme.co/view/kkgqmp7x-untitled-project");
    window.open(pdfUrl, "_blank");
  };

  const [openVideo, setOpenVideo] = useState(false);
  return (
    <div className=" tw-bg-Hero   tw-bg-cover tw-bg-[#111a3a] tw-bg-center tw-w-full tw-h-auto">
      <Header />

      <div className="container  tw-pt-6 tw-pb-28">
        <div className="row    g-5 tw-items-center">
          <div className="col-lg-6 col-md-12 sm:tw-text-start tw-text-center">
            <h1 className=" tw-text-white md:tw-text-[48.55px] tw-text-[28.55px] tw-font-zen-dots">
              At{" "}
              <b className="gradient-text   tw-font-zen-dots tw-font-semibold">
                {" "}
                Crypto Election{" "}
              </b>{" "}
              Coin (CEC)
            </h1>
            <p className=" tw-text-white  tw-font-poppins tw-font-normal tw-leading-7 tw-pt-4 tw-text-lg t">
            Crypto Election Coin represents a paradigm shift in the way voting is conducted, offering a secure, transparent, and inclusive platform for participants to actively engage in the United States presidential election and other future world elections. By harnessing the power of blockchain technology and incentivizing voter participation through a lottery system, CEC aims to enhance the integrity and accessibility of the democratic process. Join us in shaping the future of democracy with Crypto Election Coin.


            </p>
            <div className=" tw-flex tw-gap-7 sm:tw-justify-start tw-justify-center">
            
            <a href="https://my.visme.co/view/kkgqmp7x-untitled-project" target= "_blank">
              <Button
                label={"White Paper"}
                className={"  tw-mt-7"}
                rIcons={<FaArrowRight color="white" />}
              />
            </a>

            </div>
              
 
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row tw-relative">
              <div className="col-md-10 tw-p-0 tw-mx-auto">
                <div className="    tw-border-white  tw-border-2 tw-rounded-3xl  tw-rounded-tl-none  tw-rounded-br-none  tw-pt-7 tw-pb-4 sm:tw-px-4 tw-px-3 tw-h-auto tw-bg-cover bg-hero-cut">
                  <Counter />

                  <div className="  tw-text-center tw-py-4">
                    <p className=" tw-font-poppins sm:tw-text-base tw-text-sm tw-m-0 tw-text-white">
                      $8,067,263,69 / $8,404,811
                    </p>
                    <div className=" tw-flex tw-justify-between tw-items-center">
                      <p className=" tw-m-0 text-xl tw-font-poppins gradient-text">
                        Stage
                      </p>
                      <p className=" tw-m-0 text-xl tw-font-poppins gradient-text">
                        Remaining
                      </p>
                    </div>

                    <div className=" tw-flex tw-justify-between tw-items-center">
                      <p className=" tw-m-0 text-xl  tw-font-poppins tw-text-white">
                        0
                      </p>
                      <p className=" tw-m-0 text-xl  tw-font-poppins tw-text-white">
                        1
                      </p>
                    </div>

                    <div className="  tw-bg-gradient tw-rounded-lg  tw-overflow-hidden tw-my-2">
                      <div className="  tw-rounded-md tw-w-[80%] tw-bg-button-gradient tw-p-2.5"></div>
                    </div>

                    <div className=" tw-flex tw-justify-between tw-items-center">
                      <p className=" tw-m-0   tw-font-poppins tw-text-sm tw-text-white">
                        1 $EBM = 0.0015
                      </p>
                      <p className=" tw-m-0 tw-font-poppins   tw-text-sm tw-text-white">
                        Next = 0.0018
                      </p>
                    </div>
                  </div>

                  <div className="  tw-text-center tw-pb-4 tw-pt-0">
                    <p className=" tw-font-poppins sm:tw-text-base tw-text-sm tw-m-0 tw-text-white">
                      Your Purchased $EBM = 0
                    </p>
                    <p className=" tw-font-poppins sm:tw-text-base tw-text-sm  tw-m-0 tw-text-white">
                      Your Stakeable $EBM = 0
                    </p>
                  </div>

                  <div className="tw-flex tw-w-full tw-gap-3 tw-justify-center">
                    <div
                      className={`tw-rounded-xl tw-h-[48px] tw-w-full tw-justify-between tw-px-3 tw-flex tw-items-center tw-mt-2  ${getBorderColor(
                        "MATIC"
                      )}`}
                      onClick={() => handleSelect("MATIC")}
                    >
                      <div className=" tw-pb-1">
                        <img
                          src={require("../../assets/images/c2.png")}
                          alt="MATIC"
                        />
                      </div>
                      <p className="tw-m-0 tw-text-white sm:tw-text-base tw-text-sm ">Base Coin</p>
                    </div>
                    <div
                      className={`tw-rounded-xl tw-w-full tw-h-[48px] tw-justify-between tw-pr-5 tw-flex tw-items-center tw-mt-2  ${getBorderColor(
                        "USDT"
                      )}`}
                      onClick={() => handleSelect("USDT")}
                    >
                      <div>
                        <img
                          src={require("../../assets/images/c1.png")}
                          alt="USDT"
                        />
                      </div>
                      <p className="tw-m-0 tw-text-white sm:tw-text-base tw-text-sm ">USDT</p>
                    </div>
                    <div
                      className={`tw-w-full tw-rounded-xl tw-h-[48px] tw-justify-between tw-flex tw-items-center tw-px-4 tw-mt-2 ${getBorderColor(
                        "USDC"
                      )}`}
                      onClick={() => handleSelect("USDC")}
                    >
                      <div>
                        <img
                          src={require("../../assets/images/c3.png")}
                          alt="USDC"
                        />
                      </div>
                      <p className="tw-m-0 tw-text-white sm:tw-text-base tw-text-sm ">USDC</p>
                    </div>
                  </div>

                  <div className=" tw-flex tw-gap-3 tw-pt-5">
                    <div className=" tw-w-full">
                      <p className=" tw-m-0 tw-text-white  tw-font-poppins sm:tw-text-base tw-text-sm">
                        $ {selectedCurrency} you pay
                      </p>

                      <div className=" tw-rounded-xl border tw-relative tw-mt-2 ">
                        <input
                          className=" tw-bg-transparent  tw-w-full tw-px-3 tw-py-2 tw-text-white tw-outline-none"
                          defaultValue={0}
                        />
                        <div className=" tw-absolute tw-right-1.5  tw-top-0">
                          {selectedCurrency === "USDT" ? (
                            <img
                              src={require("../../assets/images/c1.png")}
                              className=" tw-w-8 tw-h-8"
                            />
                          ) : selectedCurrency === "MATIC" ? (
                            <img
                              src={require("../../assets/images/c2.png")}
                              className=" tw-w-8 tw-h-8"
                            />
                          ) : (
                            <img
                              src={require("../../assets/images/c3.png")}
                              className=" tw-w-8 tw-h-8"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className=" tw-w-full">
                      <p className="  tw-font-poppins tw-m-0 tw-text-white sm:tw-text-base tw-text-sm">
                        $EBM you receive
                      </p>

                      <div className=" tw-rounded-2xl border tw-relative  tw-mt-2 ">
                        <input
                          className=" tw-bg-transparent  tw-w-full tw-px-3 tw-py-2 tw-text-white tw-outline-none"
                          defaultValue={0}
                        />
                        <div className=" tw-absolute tw-right-3  tw-top-2">
                          <img
                            src={require("../../assets/images/footer_logo.png")}
                            className=" tw-w-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="  tw-pt-8">
                    <Button
                      label={"Buy Now"}
                      className={"  tw-py-1 tw-w-full"}
                    />
                  </div>

                  <div className=" tw-text-center  tw-pt-5">
                    <h1 className=" tw-text-white  tw-font-poppins tw-font-semibold tw-text-sm">
                      Launch On UniSwap And QuickSwap Soon
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
