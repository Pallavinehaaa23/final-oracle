import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate,Link} from "react-router-dom";
import { logout } from "../actions/userActions";
import './Header.css'
function Header({ setSearch }) {
  const dispatch = useDispatch();
const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userinfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history("/");
  };

  useEffect(() => {}, [userinfo]);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"><p className='we'>We_Hire</p></Navbar.Brand>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
            {userinfo && (
              <Form inline>
                {/* <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setSearch(e.target.value)}
                /> */}
              </Form>
            )}
          </Nav>
         
          <Nav>
          <Nav.Link href="/"><p className='home'>Home</p></Nav.Link>
                <Nav.Link href="/home"><p className='home'>About us</p></Nav.Link>
            {userinfo ? (
              <>
                {/* <Nav.Link href="/home"><p className='home'>Home</p></Nav.Link>
                <Nav.Link href="/home"><p className='home'>About us</p></Nav.Link> */}
                <NavDropdown 
                  title={`${userinfo.name}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                      
                    /> */}
                    <Link to="/profile">
                    My Profile
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              
              <Nav.Link href="/login"><p className='login'>login</p></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;