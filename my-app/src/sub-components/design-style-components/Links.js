import React from 'react';
import './designStyle.css';
import '../Header/header.css';

const Links = (props) => {
  return <p className={props.links}>{props.name}</p>
}

const FooterLinks = (props) => {
  return <p className={props.footerLinks}>{props.name}</p>
}



export {Links, FooterLinks};
