//to import component from react
import React,{Component} from 'react';
/*importing media component from reactstrap 
import {Media} from 'reactstrap';*/
import {Card,CardImg, CardImgOverlay,CardTitle} from 'reactstrap';
//(moved to main)import DishDetail from './DishdetailComponent';

//creating new component(Menu)
class Menu extends Component{
    
    //moved to Main to make menu proper presentational component
    constructor(props) {
        super(props);
        //this.state = {
          //  selectedDish:null
        }
    
   /* onDishselect(dish)
    {
        this.setState({selectedDish:dish});
    } 
   */
  

    //render will retun the corresponding view of Menu component
    render(){
        
        // js constant in JSX code 
        // byt this.props.dishes you are getting all ithe info from state (this.sate.dishes) in app (parent component)
        const menu=this.props.dishes.map((dish)=>{
         return(
              /* done by media tag
              <div  key={dish.id}  className="col-12 mt-5">
               <Media tag="li">

               <Media left middle>
                <Media object  src={dish.image} alt={dish.name} />
               </Media>

               <Media body className="ml-5">
                <Media heading>{dish.name}</Media>
                <p>{dish.description}</p>
               </Media>

               </Media>
              </div>
              */
             //by card
              <div className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                        
              <CardImg width="100%" src={dish.image} alt={dish.name}     />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>

              </Card>
              </div>

         );

        }
        ); 


        return (
      <div className="container">
      <div className="row">
      {menu}
      </div>
      </div>
        );
    }
}

//exporting component
export default Menu;