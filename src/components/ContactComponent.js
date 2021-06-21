import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,Button,Form,Label,Input,FormGroup,Col,FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component
{
  constructor(props)
  {
      super(props);
      this.state={
          firstname:'',
          lastname:'',
          telnum:'',
          email:'',
          agree:false,
          contactType:'Tel.',
          message:'',
          touched :{  // to kreep a track on whether the particular field has been touchrd or not
                      // the reason for keeping them in track is that if the user has not touched 
                      //the mentioned input boxes below then no need of validating them for errors
                  firstname: false,
                  lastname:false,
                  telnum:false,
                  email:false,
                  message:false
          }
      }
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleInputChange=this.handleInputChange.bind(this);
      this.handleBlur=this.handleBlur.bind(this);
  }

    //it is invoked on any change in any input value attribute in the form (default state of value is set to null so any input made changes the value )
    //(event) parameter carries which particular input  has been changed
    handleInputChange(event){
     const target=event.target;
     const value=target.type === 'checkbox'? target.checkbox:target.value;
     // Imp-> name attribute in form should be same as the values of form defined in state 
     const name=target.name;
      this.setState(
          {
              [name]:value
          }
      )
    }
    handleSubmit(event){
        //JSON.stringify(this.state) gives you the current updated state of the react component
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert("current state is :" + JSON.stringify(this.state));
        
        event.preventDefault();
        //to prevent from going to the next page after submission we us this
    }

        //indicate the particular filed in touched array  has been modified mentioned in touched
    handleBlur=(field)=>(evt)=>{
        this.setState({ //
            touched:{...this.state.touched, [field]:true} //whichever input box has been modified set that to true
        });
    }

    //we will validate each time the form is re renderd for errors
    validate(firstname,lastname,telnum,email,message){
        // errors will contain mssgs corresponding to the above 4 values
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            message:''
        };
            if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';
    
        const reg=/^\d+$/ ;  // reg exp for all characters to be numbers
        if(this.state.touched.telnum  && !reg.test(telnum))
            errors.telnum="all numbers should be there ";
            if(telnum.length===10)
                 errors.telnum=" length to be 10";
        const em=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(this.state.touched.email && !em.test(email))   
            errors.email="please enter valid email";

        if(this.state.touched.message && message.split(' ').filter((x)=>x).length < 10)
            errors.message="minimum words should be 5 ";
        return errors;
        // function will be invoked in render() becoz evrytime change in input form will re-render
    }
    
   render()
   {              // we will supply the current values in the sate of firsrtname,telnum, eamial to validate function and is displaye <FormFeedback> right below input box
    const errors= this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email,this.state.message);
    return(
        <div className="container">
             <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            

                <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            
                          <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname===''}//(input box is only valid if no errors are there )
                                        invalid={errors.firstname!==''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname /* this is displayed from errors object firstname string conatining msg*/}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row //this allows you to use bootstrap grid inside the form
                            >
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}   //(tying the Value to the controlled component state. so now this becomes the controlled form now as chenges made here will be reflected to react comp. )
                                        valid={errors.lastname===''}
                                        invalid={errors.lastname!==''}
                                        onBlur={this.handleBlur('lastname') }/*corresponding field parameter also that we r validating*/ 
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        valid={errors.telnum===''}
                                        invalid={errors.telnum!==''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email===''}
                                        invalid={errors.email!==''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        valid={errors.message===''}
                                        invalid={errors.message!==''}
                                        onBlur={this.handleBlur('message')}
                                        onChange={this.handleInputChange}></Input>
                                        <FormFeedback>{errors.message}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>


        </div>
    );
   }
}

export default Contact;