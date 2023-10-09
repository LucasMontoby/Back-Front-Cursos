import React from 'react'
import './navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='barra'>
      <div div className='logo'>
        <Link as={Link} to="./">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className='navbar'>
        <ul className='items'>
          <Link className='links' as={Link} to="./">Home</Link>
          <NavDropdown className='linksdrop' bg="#0066cc" title="Cursos" id="nav-dropdown">
            <NavDropdown.Item className='linksdrop2' as={Link} to="./cursos">Cursos</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Link className='links' as={Link} to="./admin">Administración</Link>
        </ul>
      </div>
      <Link className='btnReserva' as={Link} to="./reserva">Reservá tus clases!</Link>
    </div>
  )
}
export default Navbar