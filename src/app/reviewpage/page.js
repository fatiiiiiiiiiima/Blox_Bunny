import React from 'react';
import Navbar from '../components/navbar/navbar'
import Image from 'next/image';
import FOOTER from '../components/bloxfooter/bloxfooter';
import './globals.css'

export default function Reviewpage(){
    return(
        <div>
            <Navbar/>
            <section className='mainbody'>
                <h1>ROBLOX PLATFORM OVERVIEW</h1>

                <section className='blogs'>
                <div className='blogs-grid'>
                <div className='blogscol'>
                  <Image src='/review1.png' alt='blog1' width={348} height={300}></Image>
                  <h1>Roblox usage</h1>
                  <h3>Get an overview iver how "Visits" develop on the platform</h3>
                  <p>How ebgaging is the platform? Are the post-Covid user platforms here to stay? Take a look at our calculated metric-</p>
                  <span>Total Visits on Roblox</span>
                  <div className='designbutton1'>
                  <button>See Data</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/review2.png' alt='blog1' width={348} height={300}></Image>
                  <h1>Stock Prize</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Welcome on www.bloxbunny.com - a great tool for understanding how much other Roblox games are generating in revenue.</p>
                  <div className='designbutton1'>
                  <button>See Data</button>
                  </div>
                </div>
                <div className='blogscol'>
                  <Image src='/review3.png' alt='blog1' width={348} height={300}></Image>
                  <h1>How to monetize your Roblox game?</h1>
                  <h3>by <span>BLOXBUNNY TEAM</span></h3>
                  <p>Welcome on www.bloxbunny.com - a great tool for understanding how much other Roblox games are generating in revenue.</p>
                  <div className='designbutton1'>
                  <button>See Data</button>
                  </div>
                </div>
                </div>
                </section>
            </section>
        </div>
    );
}