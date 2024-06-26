import React from "react";
import { Link } from "react-router-dom";

const ElectionVoting = () => {
  return (
    <div id="teamSection" className="tw-bg-cover tw-bg-center tw-bg-[#111a3a]">
      <div className="container tw-py-16 tw-text-center">
        <h1 className="tw-text-white tw-pt-4 tw-font-zen-dots">
          ELECTION VOTING
        </h1>
        <p className=" tw-font-poppins tw-text-center tw-text-white">
          {" "}
          The lottery mechanism incentivizes voter participation, encouraging
          more individuals to engage in the electoral process and exercise their
          democratic rights.
        </p>
        <div className="row g-5 tw-pt-32">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 tw-pt-12 col-md-6">
              <div className=" tw-text-center   tw-rounded-xl">
                <div className=" tw-relative">
                  <img src={member.image2} className=" tw-mx-auto" />

                  <div className=" tw-absolute     tw-bottom-0 tw-transform ">
                    <img
                      src={member.image}
                      className=" tw-mx-auto "
                      alt={member.name}
                    />
                  </div>

                  <div className=" tw-absolute tw-left-[40%] -tw-bottom-5">
                    <img
                      src={require("../../assets/images/plus.png")}
                      className=" tw-mx-auto"
                      alt={member.name}
                    />
                  </div>
                </div>
                <div className="tw-pb-8 tw-pt-12">
                  <h3 className=" tw-text-white tw-text-2xl tw-font-poppins  tw-font-medium tw-uppercase">
                    {member.name}
                  </h3>
                  <p className="tw-text-white">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Elon Musk",
    role: "Wildcard",
    image: require("../../assets/images/election1.png"),
    image2: require("../../assets/images/election_bg.png"),
  },
  {
    name: "Donald J Trump",
    role: "The Challenger",
    image: require("../../assets/images/election2.png"),
    image2: require("../../assets/images/election_bg.png"),
  },
  {
    name: "Joe Biden",
    role: "The Incumbent",
    image: require("../../assets/images/election3.png"),
    image2: require("../../assets/images/election_bg.png"),
  },
  {
    name: "Robert F Kennedy",
    role: "The Independent",
    image: require("../../assets/images/election4.png"),
    image2: require("../../assets/images/election_bg.png"),
  },
];

export default ElectionVoting;
