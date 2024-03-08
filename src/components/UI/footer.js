import React from 'react'
import './footer.css';
import image1 from '../assets/facebookIcon.png';
import image2 from '../assets/instagramIcon.png';
import image3 from '../assets/youtubeIcon.webp';

const Footer=()=>{
    return (
      <>
        <div className="footer">
          <h1 className="footerHeading">NoteNexus</h1>
          <div className="ImageTags">
            <img className="iconimage" src={image1} alt="facebook" />
            <img className="iconimage" src={image2} alt="instagram" />
            <img className="iconimage" src={image3} alt="youtube" />
          </div>
        </div>
      </>
    );
}

export default Footer;