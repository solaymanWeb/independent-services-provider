import React from 'react';
import './Home.css'
import gym_banner from "../images/gym_banner.jpg"
import {Container, Row, Col, Button} from 'react-bootstrap'
import useGym from '../../hooks/useGym';


const Home = () => {

    const [gyms, setGyms] = useGym();

    console.log(gyms)
    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col sm={4}>
                    <div className='banner-img'>
                        <img src={gym_banner} alt="" />
                    </div>
                </Col>
                </Row>
            </Container>
        <div>
                
            <div className="services-area">
            <h3 className='service-title'> Our services</h3>
            <Container>
                    <Row>
                        
                        {
                           gyms.map(gym =>
                            <Col md={4}>
                            <div className='singal-service'>
                            <img src={gym.picture} alt="" />
                             <p>{gym.price}</p>
                             </div>
                             </Col>
                             
                             ) 
                        }
                        
                    </Row>
                </Container>
            </div>
            </div>
        </div>
    );
};

export default Home;