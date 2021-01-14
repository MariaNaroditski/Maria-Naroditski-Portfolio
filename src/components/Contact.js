import React from 'react'
import './Contact.scss'
import profile_picture from "../assets/profile_picture.png";
import { IoMdCopy } from 'react-icons/io';


function Contact() {
    const copyText = (value) => {
        const elem = document.createElement('textarea');
        elem.value = value;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
    }
    return (
        <div className="contact-wrapper"> 
            <p className="container contact-wrapper__looking-for">
                Highly organized, detail-oriented, creative and dependable 
                graduate with honors from the Holon Institute of Technology. 
                <span className="__weight">
                Looking for a position as a Web Developer.
                </span>
            </p>   
            <div className="contact-wrapper__info">
                <div className="contact-wrapper__info__col">
                    <img src={profile_picture} alt="avatar" className="contact-wrapper__info__col__profile" />
                </div>
                <div className="contact-wrapper__info__col text-center ">
                    <div className="info">
                        <h3 className="title">Contact Information:</h3>
                        <div className="info__phone">
                            <i className="fa fa-phone-square" aria-hidden="true"></i>                 
                            <span className="phone" id="phone"> 0545560378 
                                <IoMdCopy className="copy-phone-number" title="copy" onClick={() => copyText("0545560378")} />
                            </span>
                        </div>
                        <div className="info__email">
                            <i className="fa fa-envelope" aria-hidden="true" ></i>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marianaro159@gmail.com" target="_blank" rel="noopener noreferrer">marianaro159@gmail.com</a>
                            <span className="copy-email">
                                <IoMdCopy className="email-icon" title="copy" onClick={() => copyText("marianaro159@gmail.com")} />
                            </span>
                        </div>
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
