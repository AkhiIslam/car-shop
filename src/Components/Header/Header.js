import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';



const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">CAR-SHOP</Navbar.Brand>

                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="my-2" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="my-2" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="my-2" as={Link} to="/register">Register</Nav.Link>
                            {
                                user?.email ?
                                    <Box>
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                            <Button color="inherit">Dashboard</Button>
                                        </NavLink>
                                        <Button onClick={logout} className='text-white'>Logout</Button>
                                    </Box>
                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </Navbar.Collapse>


                    </Container>
                </Navbar>

            </>

        </div>
    );
};

export default Header;