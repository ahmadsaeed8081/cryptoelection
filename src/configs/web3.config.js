import { http, createConfig } from 'wagmi'
import { optimism, base, baseSepolia } from 'wagmi/chains'
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { createClient } from 'viem'


const projectId = process.env.REACT_APP_WC_PROJECT_ID;
const metadata = {  
    name: "WTL App",
    description: "",
    url: "https://ebmavenue.io/",
    icons: ["https://ebmavenue.io/"]
};

export const config = defaultWagmiConfig({
    chains: process.env.REACT_APP_ENV == "production" ? [base] : [baseSepolia],
    projectId,
    metadata
});

createWeb3Modal({
    wagmiConfig: config,
    projectId
});