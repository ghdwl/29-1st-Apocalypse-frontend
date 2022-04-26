import React from 'react';
import FooterContent from './FooterContent/FooterContent';
import FOOTER_DATA from './footerData';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContentList">
        {FOOTER_DATA.map(footerContent => {
          return (
            <FooterContent key={footerContent} footerContent={footerContent} />
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
