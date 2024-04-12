import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLink from './HeaderLink';

import './header.scss';
import Logo from '../../../assets/logo.png';

const Header = () => {
    const [shrink, setShrink] = useState(false);

    const handleScroll = () => {
        const isShrink = window.scrollY > 50;
        setShrink(isShrink);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${shrink ? 'shrink' : ''}`}>
                <div className='header_logo'>
                    <img className='header_logo-img' src={Logo} alt="" />
                </div>
                <nav className='header_nav'>
                    <ul className='header_nav-list'>
                        <HeaderLink
                            headerLinkClass={`header_nav-list-item-link ${shrink ? 'shrinkedFont' : ''}`}
                            toLink='/'
                            textLink='Accueil'
                        />
                        <HeaderLink
                            headerLinkClass={`header_nav-list-item-link ${shrink ? 'shrinkedFont' : ''}`}
                            toLink='/about'
                            textLink='À Propos'
                        />
                        <HeaderLink
                            headerLinkClass={`header_nav-list-item-link ${shrink ? 'shrinkedFont' : ''}`}
                            toLink='/medias'
                            textLink='Médias'
                        />
                        <HeaderLink
                            headerLinkClass={`header_nav-list-item-link ${shrink ? 'shrinkedFont' : ''}`}
                            toLink='/rules'
                            textLink='Règlement'
                        />
                        <HeaderLink
                            headerLinkClass={`header_nav-list-item-link ${shrink ? 'shrinkedFont' : ''}`}
                            toLink='/discord'
                            textLink='Discord'
                        />
                    </ul>
                </nav>
            </header>
        </>
    )

}

export default Header;
