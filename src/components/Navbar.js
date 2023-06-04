import { useState, useEffect } from 'react';
import { links, social } from '../datas'
import logo from '../images/logo.svg'
import { socialLinks, pageLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button className="nav-toggle" id='hide-links' onClick={toggleLinks}>
            <i className='fas fa-bars' />
          </button>
        </div>

        {/* <button className='hide-links' id='nav-toggle' onClick={toggleLinks}>
            <i className='fas fa-bars' />

          </button>
        </div> */}

      
       {showLinks && (
        <div className='links-container'>
          <ul className='links'>
            {links.map((link) => {
              const {id, url, text} = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
                
            );
            })}
          </ul>
       </div>

        )} {/* <!-- left this comment on purpose --> */}
    

        <PageLinks parentClass='nav-links' itemClass='nav-link' />

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar