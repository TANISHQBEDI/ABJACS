import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";



function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer">
        <p>ⓒ {year} abjacs · Powered by React</p>
        <p>Call Us +91-20-6620-0718 · info@abjacs.com</p>
        <ul className="social">
            <li><Link to={{pathname:"/"}}><FacebookIcon/></Link></li>
            <li><Link to="https://www.linkedin.com/company/spanvi-technologies/mycompany/" target="_blank"><LinkedInIcon/></Link></li>
            <li><Link to={{pathname:"/"}}><TwitterIcon/></Link></li>
        </ul>
    </div>
  );
  
}

export default Footer;
