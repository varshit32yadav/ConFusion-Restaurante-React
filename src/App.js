import React ,{Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
class App extends Component{

//lifting the state (by storing state information in App.js file(parent)
// and then we will use the state info in child components(eg. Menu) using props)
//as done in --> <Menu dishes={this.state.dishes}/> dishes ar available as props in menu now
constructor(props){
  super(props);

  this.state={
    dishes:DISHES
  };

}


  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>

      </Navbar>
      
      <Menu dishes={this.state.dishes}/>
    </div>
  );
}
}

export default App;
