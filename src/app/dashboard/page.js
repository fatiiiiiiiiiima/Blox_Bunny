"use client"
import Layout from '../components/layout/layout';
import './globals.css'
import StatisticCard from '../components/card/card'
import React, { Suspense, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import loadingAnimation from '../../../public/animation/loadinganimation.json'; 
const LazyAnalytics = React.lazy(() => import('../components/graphanalytics/graphanalytics'));
const LazyGameTable = React.lazy(() => import('../components/gametable/gametable'));
import CustomSelect from '../components/dropdown/dropdown'
import withAuth from '../utils/withAuth';

const Dashboard = () =>{
  const [isDashboardVisible, setIsDashboardVisible] = useState(true); // State variable to track dashboard visibility

  // useEffect to toggle dashboard visibility
  useEffect(() => {
    setIsDashboardVisible(true); // Set visibility to true when component mounts

    return () => {
      setIsDashboardVisible(false); // Set visibility to false when component unmounts
    };
  }, []);

  const handleSelectChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);
  };

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
      <div className='setdash'>
        <section className='heading'>
          <div className='textcontent'>
            <h1>Dashboard</h1>
            <p>Here is the information about all Roblox Games</p>
          </div>
        </section>
        <section className='cardcontainer'>
          <div className='cards'>
            <div className="cardgroup">
              <StatisticCard
                iconPath="increase" 
                mainText="89,935"
                label="Total users"
                trendText="10.2+1.01% this week"
                cornerIconPath="card1"
              />
              <StatisticCard
                iconPath="increase" 
                mainText="23,283.5"
                label="Total Games"
                trendText="3.1+0.49% this week"
                cornerIconPath="card2"
              />
            </div>
            <div className="cardgroup1">
              <StatisticCard
                iconPath="decrease" 
                mainText="46,827"
                label="Total users"
                trendText="2.56-0.91% this week"
                cornerIconPath="card3"
              />
              <StatisticCard
                iconPath="increase" 
                mainText="124,854"
                label="Paid Users"
                trendText="7.2+1.51% this week"
                cornerIconPath="card4"
              />
            </div>
          </div>
        </section>
        <section className='gamegraphs'>
          <div className='gameheadingsect'>
            <h1>Game Analytics</h1>
            <div className='gamefilter'>
              <CustomSelect onChange={handleSelectChange} />
            </div>
          </div>
          <div className='gamegraph'> 
            <Suspense fallback={<div className="lottie-container"><Lottie options={defaultOptions} height={400} width={400} /></div>}>
              {isDashboardVisible && <LazyAnalytics />}
            </Suspense>
          </div>
        </section>

        <section className='gametable'>
          <div className='gameheadingsect'>
            <h1>Game Analytics</h1>
            <div className='gamefilter'>
              <CustomSelect onChange={handleSelectChange} />
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyGameTable />
          </Suspense>
        </section>
      </div>
    </Layout>
  );
}

export default  withAuth(Dashboard);
