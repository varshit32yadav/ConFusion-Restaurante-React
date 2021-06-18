import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
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
        );
      }
    return (
      <div>
        <Header />
        <Switch>
         <Route path="/home" component={Homepage} />
         <Route path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} //(exact) means the path should eaxctly match with menu nothing beyond menu) 
         />
         <Route path="/contactus" component={Contact} //another way of passing a Comp. if you dont have any props to use in it 
         />
         <Redirect to="/home" // if you didnt find above route paths the you will be directed to home 
         />
        </Switch>
        <Footer/>

      </div>
    );
  }
}

export default Main;