import React from 'react'
import './Contact.scss'
import profile_picture from "../assets/profile_picture.png";

function Contact() {
    return (
        <div className="contact-wrapper"> 
            <p className="container contact-wrapper__looking-for">
                Highly organized, detail-oriented, creative and dependable 
                graduate with honors from the Holon Institute of Technology. <p className="__weight">Looking 
                for a position as a Web Developer.</p>
            </p>
         
            <div className="contact-wrapper__info">
                <div className="contact-wrapper__info__col">
                    <img src={profile_picture} alt="avatar" className="contact-wrapper__info__col__profile" />
                </div>
                <div className="contact-wrapper__info__col text-center ">
                    <div className="info">
                        <h3 className="title">Contact Information:</h3>
                        <p className="my_info">
                            <i className="fa fa-phone-square my_info__phone" aria-hidden="true">
                                <span className="phone">0545560378</span>
                            </i>
                            <i className="fa fa-envelope my_info__email" aria-hidden="true" >
                                <span className="email">marianaro159@gmail.com </span>
                            </i>   
                        </p>          
                        <div className="social-links">  
                            <a
                                href="https://www.linkedin.com/in/maria-naroditski"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            <a
                            href="https://github.com/MariaNaroditski"
                            rel="noopener noreferrer"
                            target="_blank"
                            >
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>    
                        </div> 
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Contact;
