// import React, { useState } from 'react';
// import { Container, Navbar, Nav, Button } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { FaShoppingBag, FaHome, FaCartPlus, FaBox, FaSignOutAlt } from 'react-icons/fa';
// import { FiShoppingCart, FiUser } from "react-icons/fi";
// import { signOut } from 'firebase/auth';
// import { notification } from 'antd'; 
// import { useCart } from '../../contexts/CartContext';

// const Header = () => {
//     const location = useLocation(); // Get the current location
//     const [activeSection, setActiveSection] = useState(location.pathname);
//     // const {products} = useAuth(); // Get the auth context
//     const { cart } = useCart();



//     const handleLogout = async () => {
//         try {
//             await signOut();
//             notification.success({
//                 message: 'Logged Out',
//                 description: 'You have been logged out successfully.',
//             });
//             window.location.href = '/';
//         } catch (error) {
//             notification.error({
//                 message: 'Error',
//                 description: `Error logging out: ${error.message}`,
//             });
//         }
//     }; 

//     return (
//         <Navbar bg="light" expand="lg" >
//             <Container>
//                 <Navbar.Brand as={Link} to="/"> 
//                     <img src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/elementor/thumbs/Logo-new-pludvtq5fdp2nryc52fb47i2al3kp49nz7tk4abwei.png" alt="" width="130px"/>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
//                     <Nav className="mx-auto">
//                         <Nav.Link 
//                             as={Link} 
//                             to="/" 
//                             active={activeSection === '/'}
//                             onClick={() => setActiveSection('/')}
//                         >
//                            Home
//                         </Nav.Link>
//                         <Nav.Link 
//                             as={Link} 
//                             to="/buyer-dashboard"  // Update to the correct route
//                             active={activeSection === '/all-products'}
//                             onClick={() => setActiveSection('/all-products')}
//                         >
//                            All Products
//                         </Nav.Link>
//                         <Nav.Link 
//                             as={Link} 
//                             to="/about" // Update to the correct route
//                             active={activeSection === '/cart'}
//                             onClick={() => setActiveSection('/cart')}
//                         > About
//                         </Nav.Link>
//                         <Nav.Link 
//                             as={Link} 
//                             to="/contact" // Update to the correct route
//                             active={activeSection === '/cart'}
//                             onClick={() => setActiveSection('/cart')}
//                         > Contact
//                         </Nav.Link> 
//                         <Nav.Link 
//                             as={Link} 
//                             to="/my-orders" // Update to the correct route
//                             active={activeSection === '/myOrders'}
//                             onClick={() => setActiveSection('/my-orders')}
//                         >
//                              My Orders
//                         </Nav.Link>
//                     </Nav>
//                     <cart/>
//                     <Button 
//                         type="danger" 
//                         onClick={handleLogout} 
//                         style={{ backgroundColor: 'red', padding: '10px 25px',  borderColor: 'red', marginLeft: '20px' }}
//                     >
//                         <FaSignOutAlt /> Logout
//                     </Button>
//                     <div className="icons text-dark p-3 position-relative">
//                 <Link to="/cart">
//                   <FiShoppingCart size={24} />
//                   <span
//                     className="badge bg-danger position-absolute"
//                     style={{
//                       fontSize: "0.75rem",
//                       padding: "0.3em 0.5em",
//                       borderRadius: "50%",
//                     }}
//                   >
//                     {cart.length}
//                   </span>
//                 </Link>
//               </div>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Header;



import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { signOut } from 'firebase/auth';
import { notification } from 'antd'; 
import { useCart } from '../../contexts/CartContext';

const Header = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(location.pathname);
    const { cart } = useCart(); // Get the cart from context

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
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"> 
                    <img src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/elementor/thumbs/Logo-new-pludvtq5fdp2nryc52fb47i2al3kp49nz7tk4abwei.png" alt="" width="130px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" active={activeSection === '/'} onClick={() => setActiveSection('/')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" active={activeSection === '/about'} onClick={() => setActiveSection('/about')}>About</Nav.Link>
                        <Nav.Link as={Link} to="/buyer-dashboard" active={activeSection === '/buyer-dashboard'} onClick={() => setActiveSection('/buyer-dashboard')}>Shop</Nav.Link>
                        <Nav.Link as={Link} to="/contact" active={activeSection === '/contact'} onClick={() => setActiveSection('/contact')}>Contact</Nav.Link> 
                        <Nav.Link as={Link} to="/my-orders" active={activeSection === '/my-orders'} onClick={() => setActiveSection('/my-orders')}>My Orders</Nav.Link>
                    </Nav>
                    <Button type="danger" onClick={handleLogout} style={{ backgroundColor: 'red', padding: '10px 25px', borderColor: 'red', marginLeft: '20px' }}>
                        <FaSignOutAlt /> Logout
                    </Button>
                    <div className="icons text-dark p-3 position-relative">
                        <Link to="/cart">
                            <FiShoppingCart size={24} />
                            <span
                                className="badge bg-danger position-absolute"
                                style={{
                                    fontSize: "0.75rem",
                                    padding: "0.3em 0.5em",
                                    borderRadius: "50%",
                                }}
                            >
                                {cart.length} {/* This will update in real time */}
                            </span>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
