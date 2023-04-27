import React,{Component} from 'react';
import { Navbar, NavbarToggler, Collapse,NavbarBrand,Nav,NavItem,NavLink,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class Navbar1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen:false,
            username: '',
            password: '',
        }
        
    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
      }
      
    handleLogoutClick() {
        this.props.logoutUser();
    }
    

    render(){
        const isLoggedIn = this.props.auth.isAuthenticated;
        let button;
            if (isLoggedIn) {
                button = <LogoutButton onClick={this.handleLogoutClick} />;
            } else {
                button = <LoginButton />;
            }
        return(
            
            <Navbar light style={{backgroundColor:"#303841"}}   expand="sm">
                    <NavbarBrand>
                        <Link to='/home'>
                        <img src="./images/san3tiW.png" className='item' width="90"
                                alt="San3ti Logo" />
                        </Link>
                    
                    </NavbarBrand>
                        <NavbarToggler style={{backgroundColor:"white"}}  onClick={this.toggleNav} />
                        <Collapse  isOpen={this.state.isNavOpen} navbar>
                            <ul className="navbar-nav mr-auto" >
                                <li className="nav-item item">
                                    <Link className="nav-link"  to="/home">
                                        <span className="navcol" >
                                        <span ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                                                </svg></span> Home
                                        </span>
                                    </Link>
                                    </li>
                                    <li className="nav-item item">
                                    <Link className="nav-link" to="/aboutus">
                                        <span  className="navcol">
                                        <span ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
                                                <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                                                </svg></span> About Us
                                        </span>
                                    </Link>
                                    </li>
                                    <li className="nav-item item">
                                    <Link className="nav-link" to="/contactus">
                                        <span className="navcol" >
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
                                            <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
                                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
                                            </svg></span> Contact Us
                                        </span>
                                    </Link>
                                    </li>
                                   
                                </ul>
                                <div><Link className="nav-link item" to="/Login">
                                            <span className="navcol">
                                            <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></div>
                                            </span>
                                        </Link></div>
                                {button}
                                
                                
                    
                        </Collapse>
                </Navbar>
        );
    }
}

function LoginButton(props) {
    return (
    <><Link className="btn btn-outline-info my-2 my-sm-0" to="/Login" style={{color:"white"}}>
        <i class="fa fa-user-circle" aria-hidden="true"></i> Login</Link>
    <Link className="btn btn-outline-info my-2 my-sm-0 ml-3" to="/register" style={{color:"white"}}> <span className="fa fa-sign-in-alt fa-lg"></span> Register </Link></> );
}

function LogoutButton(props) {
    return (<Link to="/home" className="btn btn-outline-danger my-2 my-sm-0" onClick={props.onClick} style={{color:"white"}}>
        <span style={{color:"white"}}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
        </span> Logout</Link>);
}

export default Navbar1;