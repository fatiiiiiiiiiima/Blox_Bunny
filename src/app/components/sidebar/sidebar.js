"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css'; // assuming you are using CSS modules

const Sidebar = () => {
    const router = useRouter();
    const isActive = (path) => router.pathname === path;

    return (
        <nav className= 'sidebar'>
            <div className='logoContainer'>
                <Image src="/navbarlogo.png" alt="BLOXBUNNY" width={150} height={50} />
            </div>
            <ul className='navList'>
                <li className={isActive('/') ? 'active' : ''}>
                    <Link legacyBehavior href="/dashboard">
                        <a className='navItem'>
                            <Image src="/dashboardicon.png" alt="Dashboard" width={24} height={24} />
                            <span className='default'>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className={isActive('/games') ? styles.active : ''}>
                    <Link legacyBehavior href="/games">
                        <a className='navItem'>
                            <Image src="/gameicon.png" alt="Games" width={24} height={24} />
                            <span>Games</span>
                        </a>
                    </Link>
                </li>
                <li className={isActive('/settings') ? styles.active : ''}>
                    <Link legacyBehavior href="/settings">
                        <a className='navItem'>
                            <Image src="/baricon.png" alt="Settings" width={24} height={24} />
                            <span>Settings</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
