import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import DropDown from "../dropdownMenu/DropdownMenu"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';




const navLinks = [
    {
        id: 1,
        path: "/home",
        display: "Home",
    },
    {
        id: 2,
        path: "/product",
        display: "Product",
    },
    // {
    //     id: 3,
    //     path: "#",
    //     display: "Cars",
    // },
    // {
    //     id: 4,
    //     path: "/contact",
    //     display: "Contact",
    // },
];
const submenu = [3]
const submenuItem = [
    {
        title: 'brand new cars',
        path: ''
    },
    {
        title: 'tokubo',
        path: ''
    },
    {
        title: 'Rentals',
        path: ''
    },
    {
        title: 'Sale',
        path: '/Cars'
    },
]

const Header = () => {
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

    const handler = (e) => {
        // console.log(e.target) ;
        e.target.style.display = 'flex'
        return;
    }

    return (
        <header className="header">
            {/* ============ header top ============ */}
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg="6" md="12" sm="12" xs="12">
                            <div className="header__top__left">
                                {/* <span>Need Help?</span> */}
                                <span style={{ color: '#898989' }}>Call Us 24/7!</span>
                                <span className="header__top__help">
                                    <i class="ri-phone-fill" style={{ color: 'rgb(34, 171, 195)' }}></i> +1-202-555-0149
                                </span>
                                <span className="header__top__help">
                                    <i class="ri-mail-fill" style={{ color: 'rgb(34, 171, 195)' }}></i><span style={{ color: '#898989' }}>Email:</span> dropurmensaje@gmail.com
                                </span>
                            </div>
                        </Col>

                        <Col lg="6" md="12" sm="12" xs="12">
                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                               
                                {/* <Link to="" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line" style={{color:'#000'}}></i> Login
                </Link> */}
                                {/* <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Register
                </Link> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* =============== header middle =========== */}
            
            {/* ========== main navigation =========== */}

            <div className="main__navbar">
                <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div className="logo">
                        <h1>
                            <Link to="/home" className=" d-flex align-items-center gap-2 App-log">
                              
                                {/* <img src={require('../../assets/all-images/logos/logo33.png')} style={{ width: "50%", height: "30%" }} /> */}

                            </Link>
                        </h1>
                    </div>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-betwee">
                        <span className="mobile__menu">
                            <i class="ri-menu-line" onClick={toggleMenu}></i>
                        </span>

                        <div className="navigation" ref={menuRef}>

                            <div className="menu" >

                                {navLinks.map((item, index) => (

                                    submenu.includes(parseInt(item.id)) ?
                                        <DropDown submenus={submenuItem} title={item.display} toggleMenu={toggleMenu} />
                                        :
                                        <NavLink
                                            to={item.path}
                                            className={(navClass) => {
                                                // console.log(navClass)
                                                return navClass.isActive ? "nav__active nav__item" : "nav__item"
                                            }
                                            }
                                            key={index}
                                            onClick={toggleMenu}
                                        >
                                            {item.display}

                                        </NavLink>

                                ))
                                }
                                {/* <div className="mobile__menu"> <SampleComponent toggleMenu={toggleMenu} /></div> */}

                            </div>
                            <div onClick={toggleMenu} style={{ background: "rgba(0,13,107,0.6)", flex: "2" }}></div>


                            {/* <DropDown submenus={submenu}/> */}
                        </div>


                        <div className="nav__right">
                            <div className="search__box">
                                <input type="text" placeholder="Search" />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Header;
