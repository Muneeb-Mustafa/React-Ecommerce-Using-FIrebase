import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingBag, FaHome, FaCartPlus, FaBox, FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { notification } from 'antd';

const Header = () => {
    const location = useLocation(); // Get the current location
    const [activeSection, setActiveSection] = useState(location.pathname);

    const handleLogout = async () => {
        try {
            await signOut();
            notification.success({
                message: 'Logged Out',
                description: 'You have been logged out successfully.',
            });
            window.location.href = '/';
        } catch (error) {
            notification.error({
                message: 'Error',
                description: `Error logging out: ${error.message}`,
            });
        }
    }; 

    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand as={Link} to="/"> 
                    <img src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/elementor/thumbs/Logo-new-pludvtq5fdp2nryc52fb47i2al3kp49nz7tk4abwei.png" alt="" width="130px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="mx-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            active={activeSection === '/'}
                            onClick={() => setActiveSection('/')}
                        >
                           Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/buyer-dashboard"  // Update to the correct route
                            active={activeSection === '/all-products'}
                            onClick={() => setActiveSection('/all-products')}
                        >
                           All Products
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/about" // Update to the correct route
                            active={activeSection === '/cart'}
                            onClick={() => setActiveSection('/cart')}
                        > About
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/contact" // Update to the correct route
                            active={activeSection === '/cart'}
                            onClick={() => setActiveSection('/cart')}
                        > Contact
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/buyer-dashboard" // Update to the correct route
                            active={activeSection === '/cart'}
                            onClick={() => setActiveSection('/cart')}
                        >
                             Cart
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/my-orders" // Update to the correct route
                            active={activeSection === '/myOrders'}
                            onClick={() => setActiveSection('/my-orders')}
                        >
                             My Orders
                        </Nav.Link>
                    </Nav>
                    <cart/>
                    <Button 
                        type="danger" 
                        onClick={handleLogout} 
                        style={{ backgroundColor: 'red', padding: '10px 25px',  borderColor: 'red', marginLeft: '20px' }}
                    >
                        <FaSignOutAlt /> Logout
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
