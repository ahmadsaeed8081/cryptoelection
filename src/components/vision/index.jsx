import React from 'react'
import EBM_Avenue from '../EBM_avenue'
import TokenUtility from '../TokenUtility'
import AboutSlider from '../AboutSlider'

const Vision = () => {
  return (
    <div  id='aboutSection'  className='  tw-relative tw-py-20  tw-w-full tw-h-auto'>
          
      <div className='container'>
        <div className='row  sm:tw-text-start  tw-text-center g-5 tw-items-center'>
            <div className='col-lg-6 col-md-12'>
              <span className=' tw-text-[#D40000] tw-font-semibold tw-text-[18px] sm:tw-justify-start tw-justify-center tw-flex tw-items-center tw-gap-4'>  <p className='  sm:tw-block tw-hidden m-0 tw-w-16 tw-h-1 tw-bg-[#D40000]'></p> At Crypto Election Coin (CEC)</span>
            <h1 className=" tw-text-black  tw-font-zen-dots  md:tw-text-[45px] tw-text-[28px]">
            
            About us
          
            </h1>
            <p className=" tw-text-black  sm:tw-text-start tw-text-center  tw-leading-7 tw-pt-4 tw-text-xl">
            we are dedicated to revolutionizing the democratic process through blockchain technology. Our team of passionate developers, marketers, and blockchain experts is committed to creating a secure, transparent, and inclusive platform for individuals to participate in the United States presidential election.            </p>
            <p className=" tw-text-black sm:tw-text-start tw-text-center  tw-leading-7 tw-pt-4 tw-text-xl">
            Driven by a shared vision of enhancing the integrity and accessibility of the electoral process, we strive to empower individuals from all backgrounds to exercise their democratic rights and make their voices heard. With a focus on innovation and community engagement, we are proud to lead the way towards a more equitable and democratic future with CEC. Join us in shaping the future of democracy. </p>
           
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='row'>
                <div className="col-md-10 tw-mx-auto">
                <AboutSlider/>
                </div>
              </div>
            </div>



        </div>

         
      </div>
      {/* <div className="tw-top-0 tw-absolute tw-left-0">
        <img src={require("../../assets/images/benefit_bg.png")} className="img-fluid" alt="Background" />
      </div> */}

      <EBM_Avenue/>
      {/* <TokenUtility/> */}
    </div>
  )
}

export default Vision
