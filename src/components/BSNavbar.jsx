import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { navItems,aboutDropDown,enterpriseDropdown } from './NavItems';
import {Link} from "react-router-dom"

import abjalogo from "../images/abja-logo.png"

function BSNavbar(props) {
  return (
    <Navbar className='navBar' bg="light" expand="lg" style={{ position: 'sticky', top: '0' }}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={abjalogo} alt="abjaLogo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {navItems.map((item)=>{
                if(item.title==="About Us"){
                    return(
                        <NavDropdown style={{fontWeight:'bolder'}} key={item.title} title={item.title} href={item.path}>
                            {aboutDropDown.map((add,index)=>{
                                return(
                                    <div key={index}>
                                      <NavDropdown.Item key={add.path} onClick={()=>{props.setData(aboutDropDown);props.setPath(add.path);props.setPageTitle(add.title)}} as={Link} to={{pathname:add.path,state:{data:props.data}}} bg="dark">{add.title}</NavDropdown.Item>
                                      <NavDropdown.Divider />
                                    </div>
                                );
                            })}
                        </NavDropdown>
                    );
                }
                else if(item.title==="Services"){
                    return(
                        <NavDropdown style={{fontWeight:'bolder'}} key={item.title} title={item.title} href={item.path}>
                            {enterpriseDropdown.map((add,index)=>{
                                return(
                                    <div key={index}>
                                      <NavDropdown.Item key={add.path} onClick={()=>{props.setData(enterpriseDropdown);props.setPath(add.path);props.setPageTitle(add.title)}} as={Link} to={{pathname:add.path,state:{data:props.data}}} bg="dark">{add.title}</NavDropdown.Item>
                                      <NavDropdown.Divider />
                                    </div>
                                );
                            })}
                        </NavDropdown>
                    );
                }
                else{
                    return(
                        <Nav.Link style={{fontWeight:'bolder'}} key={item.path} onClick={()=>{props.setData(null);props.setPath(item.path);props.setPageTitle(item.title)}} as={Link} to={{pathname:item.path}}>{item.title}</Nav.Link>
                    )
                }
            })}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BSNavbar;