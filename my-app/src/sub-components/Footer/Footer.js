import React from 'react';
import {FooterLinks} from '../design-style-components/Links';
import './footer.css';
import {LightText} from '../design-style-components/TextStyles';
import FontAwesome from '../design-style-components/FontAwesome';

const footer = (props) => {
  return(
    <footer>
      <div id="footer-top">
        <section className="footer-top-sections" id="footer-logo-wrapper">
          <img src="PICK YOUR LOGO" alt="ADD LOGO" width="280px" height="210px" />
        </section>

        <section className="footer-top-sections" id="footer-content-wrapper">
          <article id="footer-contact-info" className="footer-details">
            <p className="contact-info">
              Office: 888.888.8888
            </p>
            <div className="contact-info">
              <LightText>CEO: Your Name</LightText>
              <LightText>EMAIL: your@email.com</LightText>
              <LightText>LOCATION: Your street name and number and city</LightText>
            </div>
          </article>

            <article className="footer-details">


              <section id="footer-social-media">
                <FontAwesome fabContainer="footer-fab" content='fa fa-facebook-f' />
                <FontAwesome fabContainer="footer-fab" content='fa fa-facebook-f' />
                <FontAwesome fabContainer="footer-fab" content='fa fa-facebook-f' />
              </section>

            </article>
        </section>

        <section id="footer-links-container">
          <FooterLinks footerLinks="footer-links" name="Home" />
          <FooterLinks footerLinks="footer-links" name="ADD LINK" />
          <FooterLinks footerLinks="footer-links" name="ADD LINK" />
          <FooterLinks footerLinks="footer-links" name="ADD LINK" />
          <FooterLinks footerLinks="footer-links" name="ADD LINK" />
        </section>
      </div>

      <section id="separator" className="footer-sections"></section>
      <section id="copyright-credit" className="footer-sections">
      <p id="all-rights-reserved"><span><i className="fa fa-copyright"></i></span> YOUR COMPANY NAME All Rights Reserved 2020</p>
      <a href="#" id="imagine-tech"><p>Powered By: Imagine Tech LLC</p></a>
      </section>


    </footer>
  )
}

export default footer;
