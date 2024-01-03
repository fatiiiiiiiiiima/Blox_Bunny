import React from 'react';
import Navbar from '../components/navbar/navbar'
import Image from 'next/image';
import FOOTER from '../components/bloxfooter/bloxfooter';
import './globals.css'

export default function Blog(){

    const blogs = [
        './blog1.png',
        './blog2.png',
        './blog3.png',
        './blog4.png',
        './blog5.png',
        './blog6.png',
        './blog7.png',
        './blog8.png',
        './blog9.png',
        './blog10.png',
        './blog11.png',
        './blog12.png',
        './blog13.png',
        './blog14.png',
        './blog15.png',
        './blog16.png',
        './blog17.png',
        './blog18.png',
    ];
    return(
        <div>
           
               <Navbar/>
               <section className='mainbody'>
               <h1>Our Blog</h1>
               <p>Read the recent blog posts about BloxBunny</p>
            </section>

            <section className='blogs'>
                <div className='blogs-grid'>
                {blogs.map((src, index) => (
          <div key={index} className="blogs-article">
            <Image src={src} alt={`Blogs ${index + 1}`} width={348} height={693.95} layout="responsive" />
          </div>
        ))}
                </div>
            </section>
          <section>
            <FOOTER/>
          </section>
        </div>
    );  
}