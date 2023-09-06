import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import coding from '../assets/img/CodingAnimation.gif';


// React requires first letter of component to be capitalized so they can be distinguished from regular html tags
// A component is a function that returns some jsx

const HomePage = () => {

    const Typewriter = () => {
        const text = 'Hello, my name is Miranda. Welcome to my website!'
        const delay = 100;
        const [currentText, setCurrentText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => { // wont run infinitely because of the dependency array since we have an if statement that checks if the current index is less than the length of the text

            // if the current index is less than the length of the text, then we want to set a timeout to add the next letter to the current text
            if (currentIndex < text.length) {
            // set timeout method takes in a function and a delay,... the function is called after the delay
            // set interval is similar but it will keep calling the function after the delay instead of just once
              const timeout = setTimeout(() => {
                // arrow function that uses the previous state to update the state
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
              }, delay);
          
              return () => clearTimeout(timeout);
            }
          }, [currentIndex, delay, text]);

        return <span>{currentText}</span>
    }
    

    return (
    <section id="homePage" className="d-flex align-items-center"> {/* d-flex is a bootstrap class that makes the container a flexbox, align-items-center centers the items vertically */}
        <Container className="homePageContainer">
            <Row className="align-items-center">
                {/* column width are integers between 1 and 12, they apply at any breakpoint and indicated how many columns are occupied by the component
                    a value given to a breakpoint applies to all the other breakpoints wider than it*/}
                <Col xs={12} md={6}>
                        <h1 className="header">
                            <Typewriter />
                        </h1>
                    <p className="description">{'I am a student at the University of Waterloo studying Biomedical Engineering. I have a passion for software development and how it can improve health care.'}</p>
                    <button className="buttons" onClick={() => window.open('mailto:m48chen@uwaterloo.ca', '_blank')}>Contact me!</button>
                </Col>
                <Col xs={12} md={6} xxl={5} className="d-flex justify-content-center align-items-center"> {/*d-flex justify-content-center align-items-center*/}
                    <img src={coding} alt="Miranda" className="gif-responsive"/>
                </Col>
            </Row>
        </Container>
    </section>

    );
};

export default HomePage;