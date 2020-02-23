import React from 'react';
import './header.css';

import {Links} from '../design-style-components/Links';
import Number from '../design-style-components/PhoneNumber';
import FontAwesome from '../design-style-components/FontAwesome';

const header = () => {
  return(
    <header>
      <section id="header-top">
        <a href="./index.html"><img className="header-top-elements" id="header-top-img" src="PICK YOUR LOGO LONGFORM URL" alt="ADD LOGO" width="180px" height="110px" /></a>
        <a href="./index.html"><img className="header-top-elements" id="header-top-img-2" src="PICK YOUR LOGO STANDALONG DESING FOR SMALLER QUERIES" alt="utahhomerenovations" width="60px" height="60px" /></a>
        <article className="header-top-elements" id="header-top-content">
        <h1 id="main-heading">MAIN HEADING FOR TOP HEADER</h1>
        <h1 id="main-heading-2">SMALLER HEADING FOR MEDIA QUERIES</h1>
        </article>
      </section>
      <section id="header-bottom">
        <div id="header-bottom-inner-wrapper">
          <article  id="links-container">
            <Links links="links" name="HOME" />
            <Links links="links" name="ADD LINKS" />
            <Links links="links" name="ADD LINKS" />
            <Links links="links" name="ADD LINKS" />
            <Links links="links" name="NEW LINK" />

          </article>
          <article className="header-bottom-elements" id="fab-wrapper">
            <FontAwesome fabContainer="header-fab" content='fa fa-facebook-f' />
            <FontAwesome fabContainer="header-fab" content='fa fa-facebook-f' />
            <FontAwesome fabContainer="header-fab" content='fa fa-facebook-f' />
            <Number number= "888.888.8888" />
          </article>
        </div>
      </section>
    </header>
  )
}

export default header;
