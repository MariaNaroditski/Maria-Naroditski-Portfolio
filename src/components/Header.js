import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="header-container">
            <nav className="navbar navbar-expand-lg navbar-dark header-container__nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Maria Naroditski</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end my-links" id="navbarNavAltMarkup">
                        <div className="navbar-nav align-items-center">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href="/resume">Resume</a>
                            <a className="nav-link" href="/projects">Projects</a>
                            <a className="nav-link" href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;

