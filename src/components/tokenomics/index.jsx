import React from "react";

const Tokenomics = () => {
  return (
    <div id="tokenSection" className="  tw-bg-Tokenomics tw-relative  tw-bg-[#111a3a] tw-py-14">
      <h1 className=" tw-text-white  tw-text-center  tw-font-zen-dots  sm:tw-text-4xl tw-text-2xl">
        TOKENOMICS
      </h1>

      <div className="container ">
        <div className="row">
          <div className="col-md-11 tw-mx-auto">
          <img src={require("../../assets/images/tokens.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
