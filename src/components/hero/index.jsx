import React, {useEffect, useState } from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";
import Header from "../header";
import Counter from "../Counter";
import VideoPlayer from "../videoPlayer";
import Web3 from "web3";
import {
  usdt_address,
  usdc_address,
  token_abi,
  presale_address,
  presale_abi,
} from "../../configs/Contracts";

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract } from 'wagmi'
import { base, baseSepolia } from "wagmi/chains";
import Decimal from "decimal.js";

const Hero = (props) => {
  const [selectedCurrency, setSelectedCurrency] = useState("DAI");
  const chainId = process.env.REACT_APP_ENV == "production" ? base.id : baseSepolia.id;

  const [payAmount, set_payAmount] = useState(0);
  const [receiveAmount, set_receiveAmount] = useState(0);


  // const { chain } = useNetwork()

const { address, isConnecting ,isDisconnected} = useAccount()
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


  const [prog_percentage, set_prog_percentage] = useState(0);
  
  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract, ...states } = useWriteContract();

  useEffect(() => {

    setpercantage();

  }, [props.curr_presale.endTime]);


  function setpercantage() {
    set_prog_percentage(
      (Number(props.curr_presale.total_sold) /
        10 ** 18 /
        (Number(props.curr_presale.supply) / 10 ** 18)) *
        100
    );
  }

   async function buytoken1() 
   {

      try{
        const tx = await writeContractAsync({
          abi: presale_abi,
          address: presale_address,
          functionName: "buy_token", 
          args: [
            receiveAmount ? Convert_To_Wei(receiveAmount) : 0,
            selectedCurrency=="ETHER" ? "0" : selectedCurrency=="DAI" ? "1" :selectedCurrency=="USDC" ? "2":null,
          ],
          value: selectedCurrency=="ETHER"? Convert_To_Wei(payAmount ? Number(payAmount) : "0") : 0,

        });


    } catch (err) {
        console.error(err);
    }
}

  async function usdt_approval () {
    try {
        const tx = await writeContractAsync({
          abi: token_abi,
          address: usdt_address,
          args: [presale_address, payAmount ? Number(payAmount) * 10 ** 6 : "0"],
          functionName: "approve",

        }); 
        buytoken1();
  
       } catch (err) {
        console.error(err);
    }
  }

  async function usdc_approval () {
    try {
        const tx = await writeContractAsync({
          abi: token_abi,
          address: usdc_address,
          args: [presale_address, payAmount ? Number(payAmount) * 10 ** 6 : "0"],
          functionName: "approve",

        }); 
        buytoken1();
  
       } catch (err) {
        console.error(err);
    }
  }



  function Convert_To_eth(val) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://polygon.meowrpc.com")
    );

    val = web3.utils.fromWei(val.toString(), "ether");
    return val;
  }

  function Convert_To_Wei(val) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://polygon.meowrpc.com")
    );

    val = web3.utils.toWei(val.toString(), "ether");
    return val;
  }

  function onPay(value) {
    if (value == "" || value == 0) {
      set_receiveAmount(0);
      // set_payAmount(0)

      return;
    }

    let price;
    if (selectedCurrency=="DAI" || selectedCurrency=="USDC") 
    {
      price = Number(props.curr_presale.price) / 10 ** 18;
    } 
    else
    {
      price = Number(props.perTokenIn_Matic) / 10 ** 18;
    }

    let dec_price = new Decimal(price);
    value = new Decimal(value);
    let temp = value.div(dec_price);
    set_receiveAmount(Number(temp).toFixed(2));

  }

  function onRecieve(value) {
    if (value == "" || value == 0) 
    {
      set_payAmount(0);
      return;
    }
    let price;

    if (selectedCurrency=="DAI" || selectedCurrency=="USDC") 
    {
      price = Number(props.curr_presale.price) / 10 ** 18;
    } 
    else 
    {    
      price = Number(props.perTokenIn_Matic) / 10 ** 18;
    }

    let dec_price = new Decimal(price);
    value = new Decimal(value);
    let temp = dec_price.times(value);

    set_payAmount(Number(temp).toFixed(2));
  }

  async function buy_token() {
    if (isDisconnected) {
      alert("Kindly connect your wallet");
      return;
    }
    if (payAmount == "" || payAmount == "0") {
      alert("Kidly write the amount");
      return;
    }

    if (selectedCurrency=="ETHER" ) {
      if (Number(props.MATICBalance) < Number(Convert_To_Wei(payAmount))) {
        alert("You don't have enough ETH");
        return;
      }

      if (chainId != currentChainId )
      {
        await switchChainAsync({ chainId });
        await buytoken1?.();
      } 
      else 
      {
        await buytoken1?.();
      }
    } else if(selectedCurrency=="DAI" ){
      if (Number(props.USDTBalance) < Number(payAmount) * 10 ** 6) {
        alert("You don't have enough DAI");
        return;
      }

      if (chainId != currentChainId) {
        await switchChainAsync({ chainId });
        await usdt_approval?.();

      } else {
        await usdt_approval?.();
      }
    }
    else if(selectedCurrency=="USDC" ){
      if (Number(props.USDCBalance) < Number(payAmount) * 10 ** 6) {
        alert("You don't have enough USDC");
        return;
      }

      if (chainId != currentChainId) {
        await switchChainAsync({ chainId });
        await usdc_approval?.();

      } else {
        await usdc_approval?.();
      }
    }

  }













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
                  <Counter time={props.curr_presale.endTime ? Number(props.curr_presale.endTime) :  0}/>

                  <div className="  tw-text-center tw-py-4">
                    <p className=" tw-font-poppins sm:tw-text-base tw-text-sm tw-m-0 tw-text-white">
                    <text style={{ fontWeight:"bold", color: "white" ,fontSize:"17px"}}> Total Raised: </text> ${props.total_raised ? Number(props.total_raised)/10**6:0}
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
                      {Number(props.curr_stage) + 1}
                      </p>
                      <p className=" tw-m-0 text-xl  tw-font-poppins tw-text-white">
                        {props.curr_presale.supply? (Number(props.curr_presale.supply) / 10 ** 18) - (Number(props.curr_presale.total_sold) / 10 ** 18): 0}
                      </p>
                    </div>

                    <div className="  tw-bg-gradient tw-rounded-lg  tw-overflow-hidden tw-my-2">
                      <div className="  tw-rounded-md tw-w-[80%] tw-bg-button-gradient tw-p-2.5"></div>
                    </div>

                    <div className=" tw-flex tw-justify-between tw-items-center">
                      <p className=" tw-m-0   tw-font-poppins tw-text-sm tw-text-white">
                        1 CEC = {props.curr_presale.price
                        ? Number(props.curr_presale.price) / 10 ** 18
                        : ""}
                      </p>
                      <p className=" tw-m-0 tw-font-poppins   tw-text-sm tw-text-white">
                        Next ={props.NextStagePrice
                          ? Number(props.NextStagePrice) / 10 ** 18
                          : ""}
                      </p>
                    </div>
                  </div>

                  <div className="  tw-text-center tw-pb-4 tw-pt-0">
                    <p className=" tw-font-poppins sm:tw-text-base tw-text-sm tw-m-0 tw-text-white">
                      Your Purchased CEC = {Number(props.EBMBalance)
                          ? Number(props.EBMBalance) / 10 ** 18
                          : ""}
                    </p>
 
                  </div>

                  <div className="tw-flex tw-w-full tw-gap-3 tw-justify-center">
                    <div
                      className={`tw-rounded-xl tw-h-[48px] tw-w-full tw-justify-between tw-px-3 tw-flex tw-items-center tw-mt-2  ${getBorderColor(
                        "ETHER"
                      )}`}
                      onClick={() => handleSelect("ETHER")}
                    >
                      <div className=" tw-pb-1">
                        <img
                          src={require("../../assets/images/c2.png")}
                          alt="ETHER"
                        />
                      </div>
                      <p className="tw-m-0 tw-text-white sm:tw-text-base tw-text-sm ">Base ETH</p>
                    </div>
                    <div
                      className={`tw-rounded-xl tw-w-full tw-h-[48px] tw-justify-between tw-pr-5 tw-flex tw-items-center tw-mt-2  ${getBorderColor(
                        "DAI"
                      )}`}
                      onClick={() => handleSelect("DAI")}
                    >
                      <div>
                        <img
                          height={26} width={26}
                          src={require("../../assets/images/DAI logo.png")}
                          alt="DAI"
                        />
                      </div>
                      <p className="tw-m-0 tw-text-white sm:tw-text-base tw-text-sm ">DAI</p>
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
                          // defaultValue={0}
                          type="Number"
                          disabled={props.perTokenIn_Matic > 0 ? false : true}
                          min={0}
                          value={payAmount}
                          onChange={(e) => {
                            set_payAmount(e.target.value);
                            onPay(e.target.value);
                          }}
                        />
                        <div className=" tw-absolute tw-right-1.5  tw-top-0">
                          {selectedCurrency === "DAI" ? (
                            <img
                              src={require("../../assets/images/DAI logo.png")}
                              className=" tw-w-7 tw-h-8 pt-1"
                            />
                          ) : selectedCurrency === "ETHER" ? (
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
                        CEC you receive
                      </p>

                      <div className=" tw-rounded-2xl border tw-relative  tw-mt-2 ">
                        <input
                          className=" tw-bg-transparent  tw-w-full tw-px-3 tw-py-2 tw-text-white tw-outline-none"
                          defaultValue={0}
                          type="number"
                          disabled={props.perTokenIn_Matic > 0 ? false : true}
                          value={receiveAmount}
                          min={0}
                          onChange={(e) => {
                            set_receiveAmount(e.target.value);
                            onRecieve(e.target.value);
                          }}
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
                    onClick={buy_token}
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
