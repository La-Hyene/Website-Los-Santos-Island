import { NavLink } from 'react-router-dom';

const HeaderLink = ({headerLinkClass, toLink, textLink }) => {
    return (
        <>
            <li className='header_nav-list-item'>
                <NavLink className={headerLinkClass} to={toLink}>{textLink}</NavLink>
            </li>
        </>
    )
}

export default HeaderLink;