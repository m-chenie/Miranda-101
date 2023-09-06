import { Col, Row, Container } from "react-bootstrap";
import nutricart from '../assets/img/nutricartdemo.png';
import dinorun from '../assets/img/dinorun2.png';
import maze from '../assets/img/maze.png';
import stack from '../assets/img/stack.svg';
import { Link } from 'react-router-dom';


const ProjectHome = () => {
    return (
        <section id="projects" className="d-flex">
            <Container className="projectHomeContainer">
                <h1 className="projectHeader mb-4">{'Personal projects'} </h1>

                <Row className="projectRow">

                    <Col xs={12} md={6} className="gx-5">
                        <div className="projectCard">
                            <a href="https://github.com/m-chenie/NutriCart2.0" className="projectLink" target="_blank" rel="noopener noreferrer">
                                <img src={nutricart} alt="NutriCart" className="projectIcon"/>
                                <h3 className="header3">NutriCart</h3>
                                <p className="project-description">Elevate your online grocery experience with NutriCart, a web extension that helps you balance health and convenience in every click, by seamlessly tracking calories, protein, fibre and more! 
                                <br></br> <br></br>
                                It tracks the items in your shopping cart, giving instant feedback on the nutritional status of your shopping cart in comparison with your nutritional needs.</p>

                            </a>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className="projectCol gx-5">
                        <div className="projectCard">
                            <a href="https://github.com/m-chenie/T-RexAIGame" className="projectLink" target="_blank" rel="noopener noreferrer">
                                <img src={dinorun} alt="T-Rex AI Game" className="projectIcon"/>
                                <h3 className="header3">T-Rex AI Game</h3>
                                <p className="project-description">Play against an AI that teaches itself to play a jumping T-Rex game! <br></br>
                                <br></br>
                                Using NEAT (NeuroEvolution of Augmenting Topologies), we train an AI to play a jumping T-rex game where the T-rex jumps over cacti 
                                (similar to the Google Chrome dinosaur game).</p>
                            </a>
                        </div>
                    </Col>

                </Row>
                
                <Row className="projectRow">
                    <Col xs={12} md={6} className="gx-5">
                        <div className="projectCard">
                            <a href="https://github.com/m-chenie/MazePathFinding" className="projectLink" target="_blank" rel="noopener noreferrer">
                                <img src={maze} alt="NutriCart" className="projectIcon"/>
                                <h3 className="header3">Maze Path Finding</h3>
                                <p className="project-description">Implementing the A* pathfinding algorithm, this project finds the shortest path from a user-selected start and end point on a randomly generated maze like grid.
                                <br></br> <br></br> The project also provides a visualization of how the A* pathfinding algorithm works.</p>
                            </a>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className="viewAllCol gx-5">
                            <Link to="/projects" className="text-decoration-none">
                                <button className="viewAll">View More
                                <img src={stack} className="icon" />
                                </button>
                            </Link> 
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default ProjectHome;