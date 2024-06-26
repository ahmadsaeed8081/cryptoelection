import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Button from '../Button';

const FAQ = () => {
  const [accordions, setAccordions] = useState([
    {
      key:1,
      id:"01",
      title: "How does Crypto Election Coin (CEC) ensure the security of the voting process?",
      data: "CEC leverages blockchain technology to secure the voting process. Each vote is recorded as a transaction on the blockchain, ensuring transparency and immutability. Additionally, the integration of Non-Fungible Tokens (NFTs) adds an extra layer of security to the voting mechanism, making it resistant to tampering and fraud.",
      isOpen: false,
    },
    {
      key:2,
      id:"02",
      title: "What are the benefits of participating in the CEC voting process?",
      data: "By participating in the CEC voting process, individuals contribute to a more inclusive and transparent democratic system. Additionally, participants are automatically entered into a lottery, providing them with the opportunity to win rewards while exercising their democratic rights.",
      isOpen: false,
    },
    {
      key:3,
      id:"03",
      title: "How are the funds for the lottery pot generated?",
      data: "The funds for the lottery pot are generated through transaction taxes applied to CEC transactions. A 3% buy tax and a 5% sell tax contribute to the continuous growth of the lottery pot, ensuring that there are sufficient funds to reward participants.",
      isOpen: false,
    },
    {
      key:4,
      id:"04",
      title: "Can anyone participate in the CEC voting process?",
      data: "Yes, anyone who holds CEC tokens can participate in the voting process. The decentralized nature of blockchain technology ensures that individuals from all backgrounds and geographic locations can engage in the democratic process facilitated by CEC.",
      isOpen: false,
    },
    {
      key:5,
      id:"05",
      title: "What happens to unallocated tokens after the presale and voting phases?",
      data: "Any unallocated tokens after the presale and voting phases will be allocated towards development and marketing efforts aimed at further enhancing the CEC ecosystem and increasing its adoption.",
      isOpen: false,
    },
    {
      key:6,
      id:"06",
      title: "How are winners of the lottery selected?",
      data: "Winners of the lottery are selected randomly from the pool of eligible participants who have engaged in the voting process using CEC tokens. The lottery draw takes place on Election Day, coinciding with the conclusion of the voting process.",
      isOpen: false,
    },
    {
      key:7,
      id:"07",
      title: "Is the CEC voting process legally recognized for the United States presidential election?",
      data: "While CEC provides a novel and secure voting platform, it is important to note that its recognition and acceptance for the United States presidential election may vary depending on legal and regulatory frameworks. This is for polling purposes only and has no effect on the election",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionKey) => {
    const updatedAccordions = accordions.map((accordion) => {
      if (accordion.key === accordionKey) {
        return { ...accordion, isOpen: !accordion.isOpen };
      } else {
        return { ...accordion, isOpen: false };
      }
    });

    setAccordions(updatedAccordions);
  };

  return (
    <div className="tw-overflow-x-hidden tw-bg-no-repeat tw-w-full tw-bg-cover tw-h-auto tw-py-20">
      <div className="tw-text-center">
        <Button label={'FAQs'} className={'tw-mx-auto tw-text-2xl'} />
        <h1 className="tw-text-black tw-pt-6 tw-font-zen-dots">
          Frequently Asked <b className="gradient-text tw-font-zen-dots tw-font-semibold">Questions</b>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="tw-mt-12">
              {accordions.slice(0, 4).map((accordion, index) => (
                <Accordion
                  key={accordion.key}
                  id={accordion.id}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                  customKey={`0${index + 1}`} 
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="tw-mt-12">
              {accordions.slice(4).map((accordion, index) => (
                <Accordion
                  id={accordion.id}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                  customKey={`${index + 5}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
