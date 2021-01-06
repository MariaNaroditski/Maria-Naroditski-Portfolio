import React from 'react';
import profile_picture from '../assets/profile_picture.png' ;
import './Home.scss';

function Home() {
    return (
        <div className="home-wrapper">    
            <div className="home-wrapper__col">
                <img src={profile_picture} alt="avatar" className="home-wrapper__col__profile" />
            </div>
            <div className="home-wrapper__col text-center">
                <h1 className="home-wrapper__col__title">Full Stack Web Developer</h1>
                <p className="home-wrapper__col__text lead">
                    HTML | CSS / SCSS / Bootstrap | ES6 |
                    React | Redux | NodeJS | Express.js | MongoDB
                </p>
                <a href="/resume" className="btn btn-outline-danger btn-lg home-wrapper__col__btn" role="button">Go To Resume</a>
                <div className="home-wrapper__col__social-links">  
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
    )
}

export default Home;