
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/home';

import React, { useEffect, useState } from "react";

import {
  usdt_address,
  usdc_address,
  cec_address,
  token_abi,
  presale_address,
  presale_abi,
} from "../src/configs/Contracts";
import { useAccount, useDisconnect } from "wagmi";
import Web3 from "web3";




function App() {


  const [totalbusiness, set_totalbusiness] = useState(0);

  const [USDTBalance, set_TokenBalance] = useState(0);
  const [USDCBalance, set_USDCBalance] = useState(0);

  const [EBMBalance, set_EBMBalance] = useState(0);
  const [MATICBalance, set_MATICBalance] = useState(0);



  const [total_raised, set_totalRaised] = useState(0);

  const [curr_stage, set_curr_stage] = useState();
  const [curr_StageTime, set_curr_StageTime] = useState(0);
  const [curr_presale, set_curr_presale] = useState(0);
  const [perTokenIn_Matic, set_perTokenIn_Matic] = useState(0);
  const [NextStagePrice, set_NextStagePrice] = useState();


  const { address, isConnecting ,isDisconnected,isConnected} = useAccount()
  let count=0


 
useEffect(()=>{
  if((count==0))
  {
    count++;

      test();
  }

},[address])





  async function test(){
    const web3= new Web3(new Web3.providers.HttpProvider("https://base-rpc.publicnode.com"));

    // const web3= new Web3(new Web3.providers.HttpProvider("https://base-sepolia-rpc.publicnode.com	"));
  
              
    const presale_contract=new web3.eth.Contract(presale_abi,presale_address);
    const USDT_contract=new web3.eth.Contract(token_abi,usdt_address);
    const USDC_contract=new web3.eth.Contract(token_abi,usdc_address);

    const EBM_contract=new web3.eth.Contract(token_abi,cec_address);
    let USDTBalance;
    let USDCBalance;

    let EBMBalance;
    let totalReward;
    let totalEarning;
    let user;
    let allInvestments;
    let balance;
    
    if(isConnected)
    {
       balance  =await  web3.eth.getBalance(address)

       USDTBalance = await USDT_contract.methods.balanceOf(address).call(); 
       USDCBalance = await USDC_contract.methods.balanceOf(address).call();    
   
       EBMBalance = await EBM_contract.methods.balanceOf(address).call();    


    }

    //presale

    let curr_stage = await presale_contract.methods.get_curr_Stage().call();    

    let curr_StageTime = await presale_contract.methods.get_curr_StageTime().call();    
    let perTokenIn_Matic = await presale_contract.methods.get_ETHPrice().call();    
    // let curr_timePresale = await presale_contract.methods.curr_time().call();  
    let curr_presale = await presale_contract.methods.presale(curr_stage).call(); 
    let NextStage;
     let totalraised = await presale_contract.methods.total_raised().call();    

    if(curr_stage < 9)
    {       

      NextStage = await presale_contract.methods.presale(Number(curr_stage)+1).call();    
      set_NextStagePrice(NextStage.price)

    }   


    
    set_MATICBalance(balance)
    set_curr_stage(curr_stage)
    set_curr_StageTime(curr_StageTime)
    set_curr_presale(curr_presale)
    set_perTokenIn_Matic(perTokenIn_Matic)
    set_totalRaised(totalraised)

    // set_totalEarning(totalEarning);
    set_TokenBalance(USDTBalance);
    set_USDCBalance(USDCBalance);

    set_EBMBalance(EBMBalance);

    // set_totalInvestment(user[1])
    set_totalbusiness(totalbusiness)

    // set_investmentList(allInvestments);
    // setSelectedAmount(allInvestments[0]);
    // if(allInvestments[0])
    // {
    //   set_choosed_Unstake_inv(allInvestments[0][3])

    // }    
    // set_totalReward(totalReward);


    console.log(curr_presale.price)
  console.log("object done");
  }  



  return (
    <div className=''>
     <Routes>
     <Route path='/'  element={<Home total_raised={total_raised} USDCBalance={USDCBalance}  NextStagePrice={NextStagePrice} test={test} MATICBalance={MATICBalance} EBMBalance={EBMBalance} USDTBalance={USDTBalance}  curr_stage={curr_stage} curr_StageTime={curr_StageTime}  curr_presale={curr_presale} perTokenIn_Matic={perTokenIn_Matic} />}/>
     </Routes>
    </div>
  );
}

export default App;
