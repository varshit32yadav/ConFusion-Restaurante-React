import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS
        
    };
  }

 

  render() {
      const Homepage=()=>
      {   //one way was like you defined Menu comp there only which takes props and other way is to define explicitly like this 
        return (
          <Home dishes={this.state.dishes.filter((dish)=> dish.featured)[0]}
                promotions={this.state.promotions.filter((promotion)=> promotion.featured)[0]}
                leaders={this.state.leaders.filter((leader)=>leader.featured)[0]}
           />
        );                //match.params.dishId is a string which is converted to a base 10 integer
      }                 //here we only require match object. History and location are not required
      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
      const Aboutus=()=>
      {
        return (
          <About leaders={this.state.leaders}/>
        );
      }
    return (
      <div>
        <Header />
        <Switch>
         <Route path="/home" component={Homepage} />
         <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} //(exact) means the path should eaxctly match with menu nothing beyond menu) 
         />
        <Route path='/menu/:dishId' component={DishWithId} />
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

export default Main;