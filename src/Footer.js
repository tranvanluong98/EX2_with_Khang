import React, { Comonent } from 'react';
import './CSS/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
            
                <input type="text" className="search_cell mail" name="search" placeholder="Write your email..." />
                <button className="search_bt">JOIN</button>
                <span>
                    
                    <a href="https://fb.com" target="_blank" className="linkHref" style={{marginLeft:"70px"}} >Facebook
                        </a>
                        <img src="https://www.shareicon.net/download/2016/08/01/640429_media.svg" id="fb"/>
                    

                    <a href="https://twitter.com/?lang=vi" target="_blank" className="linkHref" >Twistter
                        </a>
                        <img src="http://files.softicons.com/download/social-media-icons/clean-simple-social-icons-by-creative-nerds/png/256x256/Twitter.png" id="tw"/>

                   <a href="https://www.google.com.vn/?gfe_rd=cr&dcr=0&ei=FkTHWpWGIauM8Qej9oKoDQ" target="_blank" className="linkHref" >Google+
                        </a>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Google-plus-circle-icon-png.png" id="google"/>
                    

                </span>
                <a href="#" className="upToWeb">
                    <img src="http://pngimages.net/sites/default/files/up-button-png-image-44110.png" title="Up the website" style={{width:"50px", height:"50px"}}/>
                </a>
                <hr/>

                    <h5 className="footer" >
                        <p id="text1" >Copyright 2018 © KAL Team </p>
                        <p id="text2" >Privacy </p>
                        <p id="text3" >Company Info </p>
                        <p id="text4" >About Us </p>
                    </h5>
            
            </div>
        );
    }
}
export default Footer;