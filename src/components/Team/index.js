import React from "react";
import { Link } from "react-router-dom";
import ElectionVoting from "../ElectionVoting";

const Team = () => {
  return (
    <div
      id="teamSection"
      className="tw-bg-cover tw-relative tw-bg-center tw-bg-[#111a3a]"
    >
      <ElectionVoting/>
      <div className="container tw-py-16 tw-text-center">
        <div className="tw-flex tw-justify-center tw-items-center tw-gap-3">
          <p className="m-0  tw-bg-button-gradient tw-w-3 tw-h-3 tw-rounded-full"></p>
          <span className="tw-font-extrabold tw-text-white tw-font-poppins">OUR TEAM</span>
          <p className="m-0 tw-bg-button-gradient tw-w-3 tw-h-3 tw-rounded-full"></p>
        </div>
        <h1 className="tw-text-white tw-pt-4 tw-font-zen-dots md:tw-text-[45px] tw-text-[35px]">
          The Leadership Team 
        </h1>
        <div className="row g-5 tw-pt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4  col-md-6">
              <div className=" tw-text-center tw-border-4 tw-border-[#D40000]   tw-rounded-xl">
                <div className="">
                 
           
                    <img
                    // height={100}
                    // width={400}
                      src={member.image}
                      className=" tw-mx-auto"
                      alt={member.name}
                    />
                 
                </div>
                <div className="tw-pb-8 tw-pt-12">
                  <h3 className=" tw-text-white tw-text-2xl tw-font-poppins  tw-font-medium tw-uppercase">
                    {member.name}
                  </h3>
                  <p className="tw-text-white">{member.role}</p>
                  {/* {member.links && (
                    <ul className="tw-flex p-0 tw-gap-3 tw-pt-2 tw-justify-center tw-items-center">
                      {member.links.map((link, i) => (
                        <li key={i}>
                          <Link to={link.url}>
                            <img
                              src={require(`../../assets/images/${link.icon}`)}
                              alt={link.alt}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )} */}
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
    name: "Don Trumpski",
    role: "Chief Election Integrity Officer",
    image: require("../../assets/images/t1.png"),
    // links: [
    //   { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
    //   { url: "", icon: "Symbol.png", alt: "Symbol" },
    //   { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    // ],
  },
  {
    name: "Donni trumpberg",
    role: "Chief Campaign Finance Officer",
    image: require("../../assets/images/t2.png"),
    // links: [
    //   { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
    //   { url: "", icon: "Symbol.png", alt: "Symbol" },
    //   { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    // ],
  },
  {
    name: "il Donald Trumpo",
    role: "Chief Blockchain Border Wall Security Officer",
    image: require("../../assets/images/t3.png"),
    // links: [
    //   { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
    //   { url: "", icon: "Symbol.png", alt: "Symbol" },
    //   { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    // ],
  },
 
];

export default Team;
