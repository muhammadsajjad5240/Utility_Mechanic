import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import '../navbar/navbar.css'
import { NavLink,Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
// import Dbform from './Dbform';
import logo from '../../images/logo.png';

const navcss = {backgroundColor: '#05164D'}
class MyNav extends Component
{
  constructor(props)
  {
      super(props);
      
      this.state={
          isTop: true
      };
    }
 componentDidMount(){

  document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 550;
    if (isTop !== this.state.isTop) {
      document.getElementById('mynav').style.backgroundColor='#3F51B5';
      // document.getElementById('mynav').style.opacity='.9';
      document.getElementById('nav1').style.color='white';
      document.getElementById('nav2').style.color='white';
      document.getElementById('nav3').style.color='white';
      document.getElementById('nav4').style.color='white';
      document.getElementById('navbarDropdown').style.color='white';
    }
    else{
      document.getElementById('mynav').style.backgroundColor='rgba(255, 255, 255, 0.3)';
      // document.getElementById('mynav').style.opacity='0.4';
      document.getElementById('nav1').style.color='black';
      document.getElementById('nav2').style.color='black';
      document.getElementById('navbarDropdown').style.color='black';
      document.getElementById('nav3').style.color='black';
      document.getElementById('nav4').style.color='black';
      
    }
  });
 } 

render()
{
return(
<Navbar fixed='top' className='navbar' id='mynav' expand="xl" varient='light' >
  <Navbar.Brand className='navpad' ><NavLink to='/'><img src={logo} className='image' /></NavLink></Navbar.Brand>
  {/* <h5>Utility Machanics</h5> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{backgroundColor:'#3F51B5'}} />
  <Navbar.Collapse id="basic-navbar-nav">
 
    <Nav className="mr-auto">
    
    </Nav>
      <Nav className='nav'>
      <Nav.Link ><NavLink title="Home" to='/home' id='nav1' className='navlink'>Home</NavLink></Nav.Link>
      <Nav.Link ><NavLink title='Contect Us' to='/contact' id='nav2' className='navlink'>Contact US</NavLink></Nav.Link>
                            <li class="nav-item dropdown  active">
                                <Link title='Services' class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                                </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to='/constructiofan-service' className='dropdownLink dropdown-item'><li>Construction</li></Link><Divider/>
                    <Link to='/carpainter-service' className='dropdownLink dropdown-item'> <li>Car Painter</li></Link><Divider/>
                    <Link to='/electrician-service' className='dropdownLink dropdown-item'><li>Electrician</li></Link><Divider/>
                    <Link to='/painter-service' className='dropdownLink dropdown-item'><li>Painter</li></Link><Divider/>
                    <Link to='/plumber-service' className='dropdownLink dropdown-item'> <li>Plumber</li></Link><Divider/>
                    <Link to='/homecleaning-service' className='dropdownLink dropdown-item'><li>Home Cleaning</li></Link><Divider/>
                    <Link to='/hvac-Ac' className='dropdownLink dropdown-item'><li>AC & Fridge</li></Link><Divider/>
                  </ul>
                </li>
                <Nav.Link ><NavLink to="/signUp" id='nav3' className='navlink' >Sign Up</NavLink></Nav.Link>
                <Nav.Link ><NavLink to="/SignIn"  id='nav4' className='navlink'>Sign In</NavLink></Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
export default MyNav;