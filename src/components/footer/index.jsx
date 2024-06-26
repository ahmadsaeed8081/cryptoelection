import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" tw-overflow-x-hidden tw-bg-[#050814]">
        <div className="container tw-py-10">
          <div className="row">
            <div className="col-md-12  tw-text-center">
              <img src={require("../../assets/images/footer_logo.png")} className=" tw-mx-auto" />
              <h2 className="  tw-pt-3 tw-font-zen-dots tw-text-white">Token Address</h2>
              <p className=" tw-text-xl tw-font-poppins tw-text-white tw-pt-5">
              CEC: 0x04d279873de44a9F9753E0EC8fD3404F42C56eeb
              </p>
              <ul className=" tw-p-0 tw-pt-4 tw-flex  tw-justify-center tw-gap-5 tw-items-center">
                <li>
                  <Link to={'https://twitter.com/cryptovote2024'}>
                    <img src={require("../../assets/images/twitter.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={'https://www.tiktok.com/@cryptoelection?_t=8nVRpHpjCrz&_r=1'}>
                    <img src={require("../../assets/images/tik-tok4.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={'https://t.me/cryptoelection2024'} >
                    <img src={require("../../assets/images/email.png")} />
                  </Link>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
      <div className="tw-bg-button-gradient tw-w-full tw-py-2  tw-text-center">
        <p className=" tw-m-0 tw-text-white tw-font-poppins">
        Copyright © 2024. All rights reserved by Your Crypto Election Coin Website.
        </p>
      </div>
    </div>
  );
};

export default Footer;
