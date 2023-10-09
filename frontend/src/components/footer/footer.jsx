import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'
import Logo from '../../assets/img/logo.png'


function footer() {
    return (
        <div className='footer'>
            <Col>
                <Row className='mb-1'>
                <img src={Logo} alt="logo" className="logo-image" />
                </Row>

                <Row>
                    <NavbarCollapse className="bg-white pt-1 rounded-3 d-flex justify-content-center" >
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="http://www.instagram.com" target="_blank"><box-icon name='instagram' type='logo' color="grey"></box-icon></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="http://www.facebook.com" target="_blank"><box-icon name='facebook-square' type='logo' color="grey"></box-icon></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="http://www.youtube.com" target="_blank"><box-icon name='youtube' type='logo' color="grey"></box-icon></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="http://www.linkedin.com" target="_blank"><box-icon name='linkedin-square' type='logo' color="grey"></box-icon></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="http://www.twitter.com" target="_blank"><box-icon name='twitter' type='logo' color="grey"></box-icon></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="http://www.twitch.com" target="_blank"><box-icon name='twitch' type='logo' color="grey"></box-icon></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </NavbarCollapse>
                </Row>
            </Col>
            <Col>
                <div className='listadoFooter'>
                    <ul className='itemsFooter'>
                        <Link className='link' as={Link} to="./">Home</Link>
                        <Link className='link' as={Link} to="./servicios">Servicios</Link>
                        <Link className='link' as={Link} to="./idiomas">Idiomas</Link>
                        <Link className='link' as={Link} to="./niveles">Niveles</Link>
                        <Link className='link' as={Link} to="./calendario">Calendario académico</Link>
                        <Link className='link' as={Link} to="./alumnos">Alumnos</Link>
                        <Link className='link' as={Link} to="./contacto">Contacto</Link>
                    </ul>
                </div>
            </Col>
            <Col>
                <div className='direFooter'>
                    <h5>Av. del Libertador 1221 <br /> CABA - C1435DOD <br /> Argentina <br /> +54 11 6335 2332 <br /> contacto@cursos.com</h5>
                </div>
            </Col>
            <Col>
                <Link className='reservaFooter' as={Link} to="./reserva">Reservá horas ya!</Link>
            </Col >
        </div >
    )
}

export default footer
