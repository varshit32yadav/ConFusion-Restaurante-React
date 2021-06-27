import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
// we need this (addComment) action creator function in order to obtain an action JS object which then  dispatch to the store by calling store.dispatch();
import { addComment,fetchDishes } from '../redux/ActionCreators';

//this will map redux store state to the props that we will use in our main component

const mapStateToProps = state => { //when you use Connect() at the bottom it will recieve state as it s parameter
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

// mapDispatchToProps is something that you will use to provide the action creators as props to your component.

 const mapDispatchToProps=(dispatch)=>({    //when you use Connect() at the bottom it will recieve dispatch as it s parameter
     
     addComment:(dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment)),
//now this addComment is available as a prop to main COmp(which will store current changed state).  # if you r confuse with the name justhover over them n you will get info about it .
    

//new prop(fetchDishes which when invoked to will result in call to dispatch fetchDishes thunk)
fetchDishes: () => { dispatch(fetchDishes())}
});

class Main extends Component {

  constructor(props){
    super(props);
  }
 /*this lifecycle method gets executed as soon as this component gets mounted in the view of the application.
 so we will use this component to fetch (fetchDshes as a prop in the Main comp) 
 when we need to fetch some data fro our app. this methid is good to go for it  */
 componentDidMount(){
  this.props.fetchDishes();
  }
  render() {
      const Homepage=()=>
      {   //one way was like you defined Menu comp there only which takes props and other way is to define explicitly like this 
        return (
               
          /*now it is (this.props.dishes.dishes) as now DISHES sate has 3 parameters(isLaoding,errmess,dishes)in it   */
          <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
           
        );                //match.params.dishId is a string which is converted to a base 10 integer
      }                 //here we only require match object. History and location are not required
      const DishWithId = ({match}) => {
        return(
            <DishDetail 
             dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
              addComment={this.props.addComment}
            />
        );
      };
      const Aboutus=()=>
      {
        return (    
          <About leaders={this.props.leaders}/>
        );
      }
    return (
      <div>
        <Header />
        <Switch>
         <Route path="/home" component={Homepage} />
         <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>} //(exact) means the path should eaxctly match with menu nothing beyond menu) 
         />
        <Route path='/menu/:dishId' component={DishWithId}  />
         <Route  exact path="/contactus" component={Contact} //another way of passing a Comp. if you dont have any props to use in it 
         />
         <Route path="/aboutus" component={Aboutus}/>
         <Redirect to="/home" // if you didnt find above route paths the you will be directed to home 
         />
        
        </Switch>
        <Footer/>

      </div>
    );
  }
}
//connect will connect MAin componenet to the REdux store  . So now we can take redux store state as a prop in this component 
//wtuh the help of withrouter Main will connect with React Router. 
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));