import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import doc from '../assets/img/doc-img.svg';
import { Link } from 'react-router-dom';

const Experience = () => {

    return (
        <section id="experience" className="d-flex">
            <Container>
                <Row className="container-fluid">
                    <Col xs={12} md={8}>
                        <span className='header2'>Recent experience</span>
                            <div className="experience-card">
                                <h3 className='header3'>Database Programmer</h3>
                                <h4 className='experience-details'>Oak Ridges Heart Clinic (May 2027 - Sept 2027)</h4>
                                <ul className='experience-description'>
                                    <li>Developed program using that diagnoses ECG rhythm abnormalities (PACs and PVCs) with an accuracy of 80%.</li>
                                    <li>Performed web scraping to automate the retrieval, upload, and classification of patients’ medications, documents and lab results into the clinic database.</li>
                                    <li>Implemented computer vision to convert non-searchable PDFs into searchable PDFs, reducing manual work by 5+ hours per week.</li>
                                </ul>
                                <div className='skillsCard'>
                                    <span className='skill'>Python</span>
                                    <span className='skill'>Numpy</span>
                                    <span className='skill'>Pandas</span>
                                    <span className='skill'>SciPy</span>
                                    <span className='skill'>OpenCV</span>
                                    <span className='skill'>Selenium</span>
                                </div>
                            </div>
                    </Col>
                    <Col xs={12} md={4} className='d-flex align-items-center justify-content-center'>
                        <Link to="/resume" className="text-decoration-none">
                            <button className='buttons'>View Resume
                            <img src={doc} className="icon" />
                            </button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;