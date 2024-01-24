import React from 'react';
import Navbar from '../components/navbar/navbar'
import Image from 'next/image';
import FAQItem from '../components/faq/faq';
import FOOTER from '../components/bloxfooter/bloxfooter';
import './globals.css'

export default function signin(){
    return(
        <div>
            <Navbar/>
            <section className='mainbody'>
                <h1>Login</h1>
                <div className="accform">
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="text" id="pass" name="pass" placeholder="Password" required />
                <button type='submit'>Submit</button>
                
            </div>
            </section>

            <section className='signbuttons'>
            <div className='googlesign'>
                        <button>
                            <span className='google-icon'>
                                <Image src='/googleicon.png' alt='Google Icon' width={35} height={35} loading="lazy" />
                            </span>
                            Sign in with Google
                        </button>
                    </div>
            <div className='signupbuttons'>
                <button className='signup'>Sign up</button>
                <button className='pass'>Forgot Password</button>
            </div>
            </section>
            <section>
                <FOOTER/>
            </section>
        </div>
    );
}