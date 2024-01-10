"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import './globals.css'; // assuming you are using CSS modules

const Sidebar = () => {
    const router = useRouter();
    const [activePath, setActivePath] = useState('');
    // const isActive = (path) => {
    //     console.log("Current path:", router.pathname, "Checking for:", path);
    //     return router.pathname === path;
    // };
   // const [activePath, setActivePath] = useState(router.pathname);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle the state
    };
    useEffect(() => {
        // Check if the router is ready
        if (router.isReady) {
            setActivePath(router.pathname);

            const handleRouteChange = (url) => {
                setActivePath(url);
            };

            router.events.on('routeChangeComplete', handleRouteChange);

            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [router]);
    return (
        <div >   

          <div className='logoContainer'>
                <Link legacyBehavior href="/">
                <a><Image src="/navbarlogo.png" alt="BLOXBUNNY" width={150} height={50} /></a>
                </Link>
            </div>   
         <button onClick={toggleSidebar} className="burger-icon">
                <div></div>
                <div></div>
                <div></div>
            </button> 
           
        <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            
            <ul className='sideList'>
                <li>
                    <Link legacyBehavior href="/dashboard">
                        <a className={`sideItem ${activePath === '/dashboard' ? 'active' : ''}`}>
                            <Image  src={activePath === '/dashboard' ? "/activedashboardicon.png" : "/dashboardicon.png"} alt="Dashboard" width={24} height={24} />
                            <span className='default'>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li >
                    <Link legacyBehavior href="/games">
                        <a className={`sideItem ${activePath === '/games' ? 'active' : ''}`}>
                            <Image src={activePath === '/dashboard'? "/activedashboardicon.png" : "/gameicon.png"} alt="Games" width={24} height={24} />
                            <span>Games</span>
                        </a>
                    </Link>
                </li>
                <li >
                    <Link legacyBehavior href="/settings">
                        <a className={`sideItem ${activePath === '/settings' ? 'active' : ''}`}>
                            <Image src={activePath === '/dashboard' ? "/activedashboardicon.png" : "/baricon.png"} alt="Settings" width={24} height={24} />
                            <span>Settings</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
        </div>

    );

};

export default Sidebar;
