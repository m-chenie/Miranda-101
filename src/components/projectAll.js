import { Col, Container, Row } from "react-bootstrap";
import nutricart from '../assets/img/nutricartdemo.png';
import dinorun from '../assets/img/dinorun2.png';
import maze from '../assets/img/maze.png';
import pdfImg from '../assets/img/filetype-pdf.svg';
import bookImg from '../assets/img/journal-code.svg';
import mask from '../assets/img/mask.svg';

// 1185x998
const ProjectAll = () => {
    return (
        <section id="projectAll">
            <Container className="projectHomeContainer">
                <h1 className="allProjectHeader">{'My favourite projects'} </h1>
                <h3 className="header3 text-center mb-4">{'(psst.. there are more on my Github)'}</h3>

                <Row className="projectRow">
                        <Col xs={12} md={4} className="">
                            <div className="projectCard">
                                <a href="https://github.com/m-chenie/NutriCart2.0" className="projectLink" target="_blank" rel="noopener noreferrer">
                                    <img src={nutricart} alt="NutriCart" className="projectIcon"/>
                                    <h3 className="header3">NutriCart</h3>
                                    <p className="project-description">Elevate your online grocery experience with NutriCart, a web extension that helps you balance health and convenience in every click, by seamlessly tracking calories, protein, fibre and more! 
                                    <br></br> <br></br>
                                    It tracks the items in your shopping cart, giving instant feedback on the nutritional status of your shopping cart in comparison with your nutritional needs.</p>

                                    <div className='skillsCard'>
                                    <span className='skill'>React</span>
                                    <span className='skill'>HTML/CSS</span>
                                    <span className='skill'>Typescript</span>
                                    <span className='skill'>Javascript</span>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col xs={12} md={4} className="projectCol">
                            <div className="projectCard">
                                <a href="https://github.com/m-chenie/T-RexAIGame" className="projectLink" target="_blank" rel="noopener noreferrer">
                                    <img src={dinorun} alt="T-Rex AI Game" className="projectIcon"/>
                                    <h3 className="header3">T-Rex AI Game</h3>
                                    <p className="project-description">Play against an AI that teaches itself to play a jumping T-Rex game! <br></br>
                                    <br></br>
                                    Using NEAT (NeuroEvolution of Augmenting Topologies), we train an AI to play a jumping T-rex game where the T-rex jumps over cacti 
                                    (similar to the Google Chrome dinosaur game).</p>

                                    <div className='skillsCard'>
                                    <span className='skill'>Python</span>
                                    <span className='skill'>NEAT</span>
                                    <span className='skill'>Pygame</span>
                                    </div>

                                </a>
                            </div>
                        </Col>

                        <Col xs={12} md={4} className="projectCol">
                            <div className="projectCard">
                                <a href="https://github.com/m-chenie/MazePathFinding" className="projectLink" target="_blank" rel="noopener noreferrer">
                                    <img src={maze} alt="A* path finding" className="projectIcon"/>
                                    <h3 className="header3">Maze Path Finding</h3>
                                    <p className="project-description">Implementing the A* pathfinding algorithm, this project finds the shortest path from a user-selected start and end point on a randomly generated maze like grid.
                                    <br></br> <br></br> The project also provides a visualization of how the A* pathfinding algorithm works.</p>

                                    <div className='skillsCard'>
                                    <span className='skill'>Python</span>
                                    <span className='skill'>Pygame</span>
                                    </div>

                                </a>
                            </div>
                        </Col>
                </Row>

                <Row className="projectRow">

                        <Col xs={12} md={4} className="">
                            <div className="projectCard">
                                <a href="https://github.com/m-chenie/fax_processor" className="projectLink" target="_blank" rel="noopener noreferrer">
                                    <img src={pdfImg} alt="Fax processer" className="projectIcon"/>
                                    <h3 className="header3">Fax_Processor</h3>
                                    <p className="project-description">A handy tool that transforms non-text searchable PDFs into fully searchable ones.
                                    <br/> <br />  Say goodbye to manual searches through endless fax PDFs and simply upload your document. 
                                    Save time, increase productivity, and enhance your document management workflow with Fax_Processor. </p>

                                    <div className='skillsCard'>
                                    <span className='skill'>Python</span>
                                    <span className='skill'>Tesseract</span>
                                    </div>
                                </a> 
                            </div>
                        </Col>

                        <Col xs={12} md={4} className="projectCol">
                            <div className="projectCard">
                                <a href="https://github.com/m-chenie/MM-BookNook" className="projectLink" target="_blank" rel="noopener noreferrer">
                                    <img src={bookImg} alt="BookNook" className="projectIcon"/>
                                    <h3 className="header3">M&M's BookNook</h3>
                                    <p className="project-description">Welcome to M&M's Book Nook. 
                                    To streamline our book management, we've developed a feature-rich program designed to catalogue our beloved books.
                                    <br></br> <br></br>
                                    Our program boasts a secure login and registration system, enhanced with face-detection technology.
                                    </p>

                                    <div className='skillsCard'>
                                    <span className='skill'>C++</span>
                                    <span className='skill'>OpenCV</span>
                                    <span className='skill'>CMake</span>
                                    </div>

                                </a>
                            </div>
                        </Col>

                        <Col xs={12} md={4} className="projectCol">
                            <div className="projectCard">
                                <a href="https://github.com/m-chenie/Mask_Detection_CNN" className="projectLink" target="_blank" rel="noopener noreferrer">
                                    <img src={mask} alt="maskDetection" className="projectIcon"/>
                                    <h3 className="header3">CNN Mask Detection</h3>
                                    <p className="project-description">Convolutional Neural Network (CNN) model to predict if a person in an image is wearing a mask or not.
                                    <br/> <br/> 
                                    The model can be used for automated mask detection in various applications, such as public health monitoring, security systems, and compliance with safety guidelines</p>
                                    
                                    <div className='skillsCard'>
                                    <span className='skill'>Python</span>
                                    <span className='skill'>Numpy</span>
                                    <span className='skill'>Matplotlib</span>
                                    <span className='skill'>scikit-learn</span>
                                    </div>
                                </a>
                            </div>
                        </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectAll;