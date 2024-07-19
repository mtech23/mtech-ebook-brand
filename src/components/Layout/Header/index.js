import React from 'react'
import { Link } from 'react-router-dom'
import { phoneImg, questionImg } from '../../../asserts/images'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"

const Header = () => {
  return (
    <>
        <header className='position-relative'>
        <div className="header_topbar">
        <div className="container">
          <div className="col-sm-12 col-lg-4 ml-auto">
            <div className="topbar_main_content">
              <div className="header_icon_with_info">
                <Link className="header_topbar_icon">
                  <img
                    draggable={false}
                    src={phoneImg}
                    alt="phone"
                    className="img-fluid"
                  ></img>
                </Link>
                <Link>
                  <span className="header_topbar_info">13322826702</span>
                </Link>
              </div>
              <div className="header_icon_with_info">
                <Link className="header_topbar_icon">
                  <img
                    src={questionImg}
                    alt="phone"
                    className="img-fluid"
                  ></img>
                </Link>
                <Link>
                  <span className="header_topbar_info">Live Chat Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
            </div>

            <section className='header_navbar'>
            <div className="container">
            <Navbar expand="lg" className="">
                <Container className="justify-content-end">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-between w-100">
                    <Nav.Link href="#home" as={Link} to="/">
                        <p className="navbar_para">Ebook Publishers llc</p>
                        <p className="navbar_para_bottom">Consultation</p>
                    </Nav.Link>

                    <Nav.Link href="#link" as={Link} to="/ghost-writer">
                        <p className="navbar_para">
                        Self <span className="header_light_bold">Publishing</span>
                        </p>
                        <p className="navbar_para_bottom">Publishing</p>
                    </Nav.Link>

                    <Nav.Link href="#link">
                        <p className="navbar_para">
                        Ghostwriting{" "}
                        <span className="header_light_bold">Services</span>
                        </p>
                        <p className="navbar_para_bottom">Writing</p>
                    </Nav.Link>

                    <Nav.Link href="#link">
                        <p className="navbar_para">
                        The Book{" "}
                        <span className="header_light_bold">Designer</span>
                        </p>
                        <p className="navbar_para_bottom">Production</p>
                    </Nav.Link>

                    <Nav.Link href="#link">
                        <p className="navbar_para">
                        Book <span className="header_light_bold">Editor</span>
                        </p>
                        <p className="navbar_para_bottom">Proofreading</p>
                    </Nav.Link>

                    <Nav.Link href="#link">
                        <p className="navbar_para">
                        <span className="header_light_bold">Marketing</span>
                        </p>
                        <p className="navbar_para_bottom">Branding</p>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
                </div>
            </section>
        </header>
            
    </>
  )
}

export default Header