import React,{Component} from 'react';
import {Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron,Button,Modal,ModalBody,ModalHeader,Form,FormGroup,Label,Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
           isNavOpen:false,
           isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.toggleNav=this.toggleNav.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
        //this is the way of passing (this.togglnav) into onClick another way is ()=>{} but this is also a way to pass 
    }
    toggleNav()
    {
        this.setState(
            {
                isNavOpen:!this.state.isNavOpen
            }
        );
    }
    toggleModal()
    {
       this.setState({
    isModalOpen:!this.state.isModalOpen
       }) ;
    }
    handleLogin(event)
    {
      this.toggleModal(); //close the modal ones the form is submitted
      alert("Username: "+ this.username.value + "Password: "+ this.password.value + "Remember: "+ this.remember.checked);
      // here we r using the  values of the form directly from the Dom
      event.preventDefault();
      //now to retireve the values ffrom the form we need Ref.  to the form
    }
render()
{    
    
    return(
        <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} // this to toggle on and off NAvlinks for medium screens and above . And for sm screens it will be hidden 
                    />
                    <NavbarBrand className="mr-auto"  href="/">
                        <img src="assets/images/logo.png" height="30" width="41"
                        alt="Restorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar /*if isOpen is ture then it collapses*/>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-lg fa-home"> Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-lg fa-info"> About Us</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-lg fa-list"> Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-lg fa-address-card"> Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal} color="primary">
                                    <span className="fa fa-lg fa-sign-in">Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>

                    </Collapse>
                </div>
            </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
     
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}/* toggle is to show and hide modal*/>
           <ModalHeader  toggle={this.toggleModal}>Login</ModalHeader>
           <ModalBody>
               <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" name="usernmae" 
                    innerRef={(input)=>this.username=input} /*way to retrieve values on uncontrolled form */ />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">password</Label>
                    <Input id="password" type="password" name="password"
                    innerRef={(input)=>this.password=input}  />
                </FormGroup>
                <FormGroup check >
                    <Label check>
                      <Input type="checkbox"  name="remember"
                      innerRef={(input)=>this.remember=input} /> 
                     Remember me
                     </Label>   
                </FormGroup>
                <FormGroup>
                <Button type="submit" value="submit" name="submit" color="primary">Login</Button>
                </FormGroup>
               </Form>
           </ModalBody>
       </Modal>
    </>
    );
}
}
export default Header;


