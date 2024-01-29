"use client"
import Layout from '../components/layout/layout';
import './globals.css'
import Image from 'next/image';
import StatisticCard from '../components/card/card'
import React, { Suspense } from 'react';
import Lottie from 'react-lottie';
import loadingAnimation from '../../../public/animation/loadinganimation.json'; 
const LazyAnalytics = React.lazy(() => import('../components/graphanalytics/graphanalytics'));
const LazyGameTable = React.lazy(() => import('../components/gametable/gametable'));
import CustomSelect from '../components/dropdown/dropdown'
import withAuth from '../utils/withAuth';
import { useState,useEffect } from 'react';
const Dashboard = () =>{
  
  const handleSelectChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process, for example, fetching data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Layout>
        {isLoading ? (
        <div className="lottie-container">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : (
        <div>
      <section className='heading'>
        <div className='textcontent'>
      <h1>Dashboard</h1>
      <p>Here is the information about all Roblox Games</p>
      </div>
      <div className='headicons'>
      <Image src="/search.png" alt="Search" width={20} height={20} loading="lazy" />
      <Image src="/bell.png" alt="Bell" width={20} height={20} loading="lazy" />
      <Image src="/profile.png" alt="profile" width={20} height={20} loading="lazy"/>
      <h2>Marci Fumons</h2>
      <Image src="/downarrow.png" alt="profile" width={10} height={8} loading="lazy"/>
      </div>
      </section>
      <section className='cardcontainer'>
      <div className='cards'>
      <StatisticCard
        iconPath="increase" 
        mainText="89,935"
        label="Total users"
        trendText="10.2  +1.01% this week"
        cornerIconPath="card1"
      />
      <StatisticCard
        iconPath="increase" 
        mainText="23,283.5"
        label="Total Games"
        trendText="3.1  +0.49% this week"
        cornerIconPath="card2"
      />
      <StatisticCard
        iconPath="decrease" 
        mainText="46,827"
        label="Total users"
        trendText="2.56  -0.91% this week"
        cornerIconPath="card3"
      />
      <StatisticCard
        iconPath="increase" 
        mainText="124,854"
        label="Paid Users"
        trendText="7.2  +1.51% this week"
        cornerIconPath="card4"
      />
      </div>
      
      </section>
      <section className='graphs'>
        <div className='headingsect'>
      <h1>   Game Analytics</h1>
      <div className='filter'>
      <CustomSelect onChange={handleSelectChange} />
      </div>
      </div>
      <div className='graph'> 
      <Suspense fallback={<div className="lottie-container"><Lottie options={defaultOptions} height={400} width={400} /></div>}>
            <LazyAnalytics />
          </Suspense>
      </div>
      </section>

      <section className='gametable'>
      <div className='headingsect'>
      <h1>   Game Analytics</h1>
      <div className='filter'>
      <CustomSelect onChange={handleSelectChange} />
      </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
  
  <LazyGameTable />
</Suspense>
       
      </section>
      </div>
      )}
    </Layout>
  );
}
export default withAuth(Dashboard);