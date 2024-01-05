import React from 'react';
import Navbar from '../components/navbar/navbar'
import Image from 'next/image';
import FOOTER from '../components/bloxfooter/bloxfooter';
import './globals.css'

export default function Blog(){

    return(
        <div>
               <Navbar/>
               <section className='mainbody'>
               
               <h1>Our Blog</h1>
               <p>Read the recent blog posts about BloxBunny</p>
            </section>

            <section className='blogs'>
                <div className='blogs-grid'>
                <div className='blogscol'>
                  <Image src='/blog1.png' alt='blog1' width={348} height={300}></Image>
                  <h1>How to monetize your Roblox game?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Welcome on www.bloxbunny.com - a great tool for understanding how much other Roblox games are generating in revenue.</p>
                  <div className='designbutton1'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog2.png' alt='blog2' width={348} height={300}></Image>
                  <h1>How much money can you make on Roblox?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Only the sky is the limit. The top 3 Roblox games are making 3m + USD a month. Take a look at our platform, www.bloxbunny.com to understand more about the revenue each game is making.</p>
                  <div className='designbutton2'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog3.png' alt='blog3' width={348} height={300}></Image>
                  <h1>How to publish Roblox games in China?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>From the western world directly to China. The opportunities are huge for new developers as the amount of games is limited.</p>
                  <div className='designbutton3'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                
                <div className='blogscol'>
                  <Image src='/blog4.png' alt='blog4' width={348} height={300}></Image>
                  <h1>New game ideas for Roblox</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Are you a team embarking on your Roblox adventure? Here are some game ideas/advices you might want to explore based on your team size.</p>
                  <div className='designbutton4'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog5.png' alt='blog5' width={348} height={300}></Image>
                  <h1>How to market a Roblox game?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>This article has been written by the www.bloxbunny.com team.</p>
                  <div className='designbutton5'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog6.png' alt='blog6' width={348} height={300}></Image>
                  <h1>Roblox is so much more than a game. It can become the future of education</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Roblox is so much more than a game. It can become the future of education</p>
                  <div className='designbutton6'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog7.png' alt='blog7' width={348} height={300}></Image>
                  <h1>ALL YOU NEED TO KNOW ABOUT THE ROBLOX ACCELARATOR PROGRAM 2021</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Are you looking to accelerate the growth of a team or an experience on Roblox? Are you interested in providing direct feedback on platform?</p>
                  <div className='designbutton7'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog7.png' alt='blog7' width={348} height={300}></Image>
                  <h1>Top Roblox games in March 2021</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>We will start creating this articles on a monthly basis. If you are interested in getting a snapshot of Roblox, return to www.bloxbunny.xom/blog-overview at the end of every month.</p>
                  <div className='designbutton8'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog8.png' alt='blog8' width={348} height={300}></Image>
                  <h1>Which Analytics solution should I use in my Roblox game?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>www.bloxbunny.com is a competitor facing tool. It provides great insights into who your competitors are and how are they performing. While it is a great analytics tool for tracking competitors.</p>
                  <div className='designbutton9'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog9.png' alt='blog9' width={348} height={300}></Image>
                  <h1>How to get an investor for my Roblox game?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>This is a question we keep seeing on the Roblox dev forum. We will take you through some of our opinions about this topic.</p>
                  <div className='designbutton10'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog10.png' alt='blog10' width={348} height={300}></Image>
                  <h1>Roblox forecasts 400m USD in developer payouts in 2021</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Based on 2021 forecast, Roblox expects to have a 56% to 64% growth</p>
                  <div className='designbutton11'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog18.png' alt='blog18' width={348} height={300}></Image>
                  <h1>How much money do Roblox developers make?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Roblox games revenue in 2021</p>
                  <div className='designbutton12'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                
                <div className='blogscol'>
                  <Image src='/blog11.png' alt='blog11' width={348} height={300}></Image>
                  <h1>Roblox Investors - Stock price</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Future valuation of Roblox- key elements</p>
                  <div className='designbutton13'>
                  <button>Read More &gt;</button>
                  </div>
                </div><div className='blogscol'>
                  <Image src='/blog12.png' alt='blog12' width={348} height={300}></Image>
                  <h1>Top 5 Roblox games</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Learn more about the top 5 Roblox games.</p>
                  <div className='designbutton14'>
                  <button>Read More &gt;</button>
                  </div>
                </div><div className='blogscol'>
                  <Image src='/blog13.png' alt='blog13' width={348} height={300}></Image>
                  <h1>Top developers on Roblox in 2021?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Which are the top Roblox developers?</p>
                  <div className='designbutton15'>
                  <button>Read More &gt;</button>
                  </div>
                </div><div className='blogscol'>
                  <Image src='/blog14.png' alt='blog14' width={348} height={300}></Image>
                  <h1>Roblox insights platform is LIVE!</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Roblox insights platform is now Live</p>
                  <div className='designbutton16'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog15.png' alt='blog15' width={348} height={300}></Image>
                  <h1>Indie is free in the first 2 months</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Roblox developers get a free subscription to bloxbunny for 2 months</p>
                  <div className='designbutton17'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/blog18.png' alt='blog18' width={348} height={300}></Image>
                  <h1>Top grossing games on Roblox</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>How much do the top 3 Roblox games earn/month?</p>
                  <div className='designbutton18'>
                  <button>Read More &gt;</button>
                  </div>
                </div>
                </div>
               
                
            </section>
          <section>
            <FOOTER/>
          </section>
        </div>
    );  
}