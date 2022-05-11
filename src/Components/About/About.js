import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../images/about.jpg'
import "./About.css"

const About = () => {
    return (
        <div>
           <Container className='about-container'>
                <Row>
                    <Col>
                        <div className='about-img'>
                        <img src={about} alt="" />
                        </div>
                    </Col>
                    <Col>
                    <h3>My Goal </h3>
                    <p>আমার স্বপ্ন হলো আগামি ৪ মাসের মাঝে একজন প্রফেশনাল  ভালো ওয়েব ডেভেলপার হয়ে বিদেশের কোন কম্পানিতে জব করা । হয়তো আপনারা পাশে থাকলে কাজ শিখতে পারবো ইনশা আল্লাহ । কিন্তু আমি ইংলিশ এ ইমপ্রুভ করতে পারছি না । আমার হাতে ৪-৫ মাস সময় আছে । কাজ শিখার মত । আর ও ৪-৫ মাস কাজ শিখে ও যদি জব এ ডুকতে না পারি তাহলে কি হবে জানি না....... ।  </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;