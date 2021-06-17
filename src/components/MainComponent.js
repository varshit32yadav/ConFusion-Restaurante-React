import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        
    };
  }

 

  render() {
      const Homepage=()=>
      {   //one way was like you defined Menu comp there only which takes props and other way is to define explicitly like this 
        return (
          <Home />
        );
      }
    return (
      <div>
        <Header />
        <Switch>
         <Route path="/home" component={Homepage} />
         <Route path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} //(exact) means the path should eaxctly match with menu nothing beyond menu) 
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