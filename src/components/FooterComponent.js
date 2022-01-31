import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

//functional component
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div class="row row-content justify-content-center" id='linkRow'>                   
                <div className='col-xs-4'>
                    <a href='https://www.instagram.com/rixhabbhh/'><AiFillInstagram size="40px" /></a>
                </div>
                <div className='col-xs-4'>
                    <a href='https://www.facebook.com/profile.php?id=100004005766488'><BsFacebook size="40px" /></a>
                </div>
                <div className='col-xs-4'>
                    <a href='https://www.linkedin.com/in/rishabh-sharma-011980212/'><BsLinkedin size="40px" /></a>
                </div>                
           </div>
            <div className="row justify-content-center">             
                <div className="col-auto">              
                    <p id='copyright'>© Rishabh Sharma, Made with <a href='https://reactjs.org/'>ReactJS</a></p>                
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;