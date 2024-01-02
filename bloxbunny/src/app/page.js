import React from 'react';
import Navbar from './components/navbar/navbar'
import Image from 'next/image';
import FOOTER from './components/bloxfooter/bloxfooter';
import './globals.css'

export default function Home(){

    const features = [
        './detcomptrack.png',
        './gamerevest.png',
        './sportopp.png'
    ];
    const payplan = [
        './free.png',
        './indie.png',
        './pro.png'
    ];
    return(
        <div>
            <section className='mainimage'>
               <Navbar/>
            </section>

            <section className='feature'>
                <h1>Features</h1>
                <div className="feature-grid">
        {features.map((src, index) => (
          <div key={index} className="feature-article">
            <Image src={src} alt={`Feature ${index + 1}`} width={300} height={200} layout="responsive" />
          </div>
        ))}
      </div> 
            </section>

            <section className='payplan'>
                <div className='display'>
            <div className="pay-grid">
        {payplan.map((src, index) => (
          <div key={index} className="feature-article">
            <Image src={src} alt={`PayPlan ${index + 1}`} width={348} height={536.5} layout="responsive" />
          </div>
        ))}
      </div> 
      </div>
            </section>

            <section className='feature'>
            <h1>View in Action</h1>
            <p>Watch an introduction to out platform</p>

            <div>
                <Image src='./vidbody.png' alt='Video body' width={918} height={545}></Image>
            </div>
            </section>

            <section className='estimate'>
                <h1>How do we estimate revenue?</h1>
                <p>We are using proprietary algorithms and estimations. We consider our revenue estimates to be close to reality but they cannot be treated 100% accurate.</p>
            </section>

            <section className='updateform'>
                <h1>Get The Latest Updates</h1>
                <p>Do you want to learn more from us? Subscribe to our newsletter and get the latest news.</p>

                <div className="form-row">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <button type='submit'>Subscribe</button>
            </div>
            </section>

            <section>
                <FOOTER></FOOTER>
            </section>
        </div>
    );  
}