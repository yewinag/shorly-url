import React from 'react';
import { List, SocialLink } from '../common';
import { features, resources, socialLinkList, company } from '../../constants';

function Footer() {
  return (
    <footer className="footer">
      <article className="footer-section">
        <section className="footer-logo">
          <h3>Shortly</h3>
        </section>
        <section className="footer-link-layout">
          <div className="feature">
            <h5>Features</h5>
            <List listElements={features} />
          </div>
          <div className="resource">
            <h5>Resources</h5>
            <List listElements={resources} />
          </div>
          <div className="copyright">
            <h5>Company</h5>
            <List listElements={company} />
          </div>
        </section>
        <section className="footer-social">
          {socialLinkList.map((item) => (
            <SocialLink key={item.id} item={item} />
          ))}
        </section>
      </article>
    </footer>
  );
}

export default Footer;
