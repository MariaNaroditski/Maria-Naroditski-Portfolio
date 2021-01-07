import React from 'react';
import './Projects.scss';
import ScrollArrow from "./ScrollArrow";


function Projects() {
    return (
        <div className="main-projects-container">
            <h1>My Projects:</h1>
            <div className="projects-wrapper">
                <div className="card projects-wrapper__card">
                    <div class="card-body">
                        <h3 className="card-title">Courses</h3>
                        <p className="card-text">
                            Manipulating courses and authors through Redux store.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Courses" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>  
                <div className="card projects-wrapper__card">
                    <div class="card-body">
                        <h3 className="card-title">Calculator</h3>
                        <p className="card-text">
                            Smart calculator built with React.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Calculator" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>
                <div className="card projects-wrapper__card">
                    <div class="card-body">
                        <h3 className="card-title">Patatap Game</h3>
                        <p className="card-text">
                            Game in which every pressed key on keyboard makes a sound and a shape on a screen.
                        </p>
                        <p className="card-text patatap">
                            Built with HTML, CSS and JS. Paper.js and Howler.js libraries were in use.
                        </p>
                        <a href="https://github.com/MariaNaroditski/patatap" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>    
                <div className="card projects-wrapper__card">
                    <div class="card-body">
                        <h3 className="card-title">Star-Match-Game</h3>
                        <p className="card-text">
                            Match the numbers on the right to the number of stars on the left in a limited time.
                        </p>
                        <p className="card-text">
                            A game built with Reactful.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Star-Match-Game" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>              
                <div className="card projects-wrapper__card">
                    <div class="card-body">
                        <h3 className="card-title">Color - Guessing Game</h3>
                        <p className="card-text">
                            Guess the color based on rgb numbers!
                        </p>
                        <p className="card-text">
                            Built with javascript.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Color-Game" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>       
            </div>
            <ScrollArrow />
        </div>
    )
}

export default Projects; 