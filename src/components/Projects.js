import React from 'react';
import './Projects.scss';
import ScrollArrow from "./ScrollArrow";


function Projects() {
    return (
        <div className="main-projects-container">
            <h1>My Projects:</h1>
            <div className="projects-wrapper">
            <div className="card projects-wrapper__card">
                    <div className="card-body">
                        <h3 className="card-title">This Portfolio</h3>
                        <p className="card-text">
                            Look at the code of this portfolio project!
                        </p>
                        <p className="card-text">
                            Built with React.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Maria-Naroditski-Portfolio" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>
                <div className="card projects-wrapper__card">
                    <div className="card-body">
                        <h3 className="card-title">Courses (Redux)</h3>
                        <p className="card-text">
                            Manipulating courses and authors through Redux store.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Courses-React-Redux" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>  
                <div className="card projects-wrapper__card">
                    <div className="card-body">
                        <h3 className="card-title">Courses (Flux)</h3>
                        <p className="card-text">
                            Manipulating courses and authors through Flux store.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Courses-React-Flux" className="btn btn-outline-danger">See The Code On Git</a>
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
                        <h3 className="card-title">Yelp Camp</h3>
                        <p className="card-text">
                            Application that presents information of campgrounds.
                        </p>
                        <p className="card-text">
                            Built with Node.js - Express.js, EJS and MongoDB.
                        </p>
                        <a href="https://github.com/MariaNaroditski/yelp-camp" className="btn btn-outline-danger">See The Code On Git</a>
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
                            Guess the color based on RGB numbers!
                        </p>
                        <p className="card-text">
                            Built with javascript.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Color-Game" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>
                <div className="card projects-wrapper__card">
                    <div class="card-body">
                        <h3 className="card-title">Todo List</h3>
                        <p className="card-text">
                            You can add and delete products on this todo list!
                        </p>
                        <p className="card-text">
                            Built with HTML, CSS and jQuery.
                        </p>
                        <a href="https://github.com/MariaNaroditski/Todo-List" className="btn btn-outline-danger">See The Code On Git</a>
                    </div>
                </div>
            </div>
                <ScrollArrow />
        </div>
    )
}

export default Projects; 