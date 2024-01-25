"use client"
import React from 'react';
import Navbar from '../components/navbar/navbar'
import Image from 'next/image';
import FOOTER from '../components/bloxfooter/bloxfooter';
import { signIn } from '../utils/firebase';
import './globals.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { signInWithGoogle } from '../utils/firebase';
export default function signin(){
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const message = params.get('message');
    if (message) {
      setPopupMessage(message);
      setTimeout(() => {
        setPopupMessage('');
      }, 1000); // Change the duration as needed (in milliseconds)
    }
  }, []);
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('User signed in with Google:', user);
      router.push('/');
    } catch (error) {
      setError(error.message);
      console.error('Google sign-in failed:', error.message);
    }
  };
  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    try {
      const user = await signIn(email, password);
      console.log('User signed in:', user);
      router.push('/');
      // Redirect or additional tasks after successful sign-in
    } catch (error) {
      console.error('Sign in failed:', error.message);
    }
  };

    return(
        <div>
            
            <Navbar/>
            <section className='mainbody'>
            {popupMessage && <div className="popup">{popupMessage}</div>}
                <h1>Login</h1>
                <form className='accform' onSubmit={handleSignIn}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
      />
                <button type='submit'>Submit</button>
                
            </form>
            </section>

            <section className='signbuttons'>
            <div className='googlesign'>
                        <button onClick={handleGoogleSignIn}>
                            <span className='google-icon'>
                                <Image src='/googleicon.png' alt='Google Icon' width={35} height={35} loading="lazy" />
                            </span>
                            Sign in with Google
                        </button>
                    </div>
                    {error && <p>Error: {error}</p>}
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