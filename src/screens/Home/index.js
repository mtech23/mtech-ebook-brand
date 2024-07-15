import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { heroImgLeft, heroImgRight, phoneImg, questionImg, leatherImg} from '../../asserts/images';
import "./style.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

      <div className='header_topbar'>
        <div className='container'>
          <div className='col-md-4 ml-auto'>
           <div className='topbar_main_content'>
           <div className='header_icon_with_info'>
              <Link className='header_topbar_icon'>
                <img src={phoneImg} alt='phone' className='img-fluid'></img>
              </Link>
              <Link>
                <span className='header_topbar_info'>13322826702</span>
              </Link>
            </div>
            <div className='header_icon_with_info'>
           
              <Link className='header_topbar_icon'>
                <img src={questionImg} alt='phone'  className='img-fluid'></img>
              </Link>
             <Link>
             <span className='header_topbar_info'>Live Chat Now</span>
             </Link>

            </div>
           </div>
          </div>
        </div>
      </div>

      <section className="hero_section">

        <div className='container'>
        <Navbar expand="lg" className="">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-between w-100">
            <Nav.Link href="#home">
              <p className='navbar_para'>Ebook Publishers llc</p>
              <p className='navbar_para_bottom'>Consultation</p>
            </Nav.Link>

            <Nav.Link href="#link">
              <p className='navbar_para'>Self <span className='header_light_bold'>Publishing</span></p>
              <p className='navbar_para_bottom'>Publishing</p>
            </Nav.Link>

            <Nav.Link href="#link">
              <p className='navbar_para'>Ghostwriting <span className='header_light_bold'>Services</span></p>
              <p className='navbar_para_bottom'>Writing</p>
            </Nav.Link>

            <Nav.Link href="#link">
              <p className='navbar_para'>The Book <span className='header_light_bold'>Designer</span></p>
              <p className='navbar_para_bottom'>Production</p>
            </Nav.Link>

            <Nav.Link href="#link">
              <p className='navbar_para'>Book <span className='header_light_bold'>Editor</span></p>
              <p className='navbar_para_bottom'>Proofreading</p>
            </Nav.Link>

            <Nav.Link href="#link">
              <p className='navbar_para'><span className='header_light_bold'>Marketing</span></p>
              <p className='navbar_para_bottom'>Branding</p>
            </Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>

        <div className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-md-3">
                    <div>
                        <img src={heroImgLeft} className="img-fluid" alt=""></img>
                    </div>
                </div>

                <div className="col-md-4">
                  <div className='hero_centered_main'>

                    <div className='hero_centered_content'>
                      <div className='content_with_border'>
                        <h2 className='brand_name_title'>Welcome To Brand Name</h2>

                        <h2 className='ebook_publisher_title'>
                        We Are
                        the Ebook
                        Publishers
                        You Wish For
                        </h2>

                        <p className='avail_discount_text'>Avail a discount on all our services.</p>

                      </div>

                      <div className='featherImg'>
                      <img src={leatherImg} className='img-fluid' alt='leather'></img>
                    </div>
                    </div>

                   
                  </div>
                </div>

                <div className="col-md-3">
                    <div>
                        <img src={heroImgRight} className="img-fluid" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
export default Home
