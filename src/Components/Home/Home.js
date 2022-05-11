import React from 'react';
import './Home.css'
import gym_banner from "../images/gym_banner.jpg"
import {Container, Row, Col, Button} from 'react-bootstrap'
import useGym from '../../hooks/useGym';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

    const [gyms, setGyms] = useGym();
    const navigate = useNavigate();

    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col sm={12}>
                    <div className='banner-img'>
                        <img src={gym_banner} alt="" />
                    </div>
                </Col>
                </Row>
            </Container>
        <div>   

         {/* SERVICES AREA  */}

            <div className="services-area">
            <h3 className='service-title'> Our services</h3>
            <Container>
                    <Row  className='g-5' >
                        {
                           gyms.map(gym =>                       
                            <Col  md={6} lg={4}>
                            <div className='singal-service'>
                            <img src={gym.picture} alt="" />
                            <div  key={gym._id} className='gym-details'>
                            <h6>Name : {gym.name}</h6>
                            <p>Price : ${gym.price}</p>
                            <p><span className='discription'>Discription</span> : {gym.discription}</p>
                            <Link to="/checkout">
                            <Button variant='success'>Check out</Button>
                            </Link>
                        
                            </div>
                            </div>
                            </Col>
                             
                             ) 
                        }
                        
                    </Row>
                </Container>
            </div>
            </div>
         {/* FOOTER AREA */}

         <Container className='footer'>
             <Row>
                 <Col sm={12}>
                        <p>&copy; copyright solayman</p>
                 </Col>
             </Row>
         </Container>
        </div>

    );
};

export default Home;