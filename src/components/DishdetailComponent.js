import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle} from 'reactstrap';

class DishDetail extends Component
{
   /* 
    constructor(props)
    {
        super(props);
        this.state={
            
        }
        
        
    }

   */

     renderDish(dish)
     {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
             );
     }
     renderComments(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        // This part allows you to retrieve the list of information to be displayed 
        const c = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            )
        })
        return (

            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {c}
                </ul>

            </div>
        )
    }

    render()
    {         
      
              return(
            <div className="row">

            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1" >
            { this.props.dish && this.renderComments(this.props.dish.comments)}
            </div>

            </div>
        );
    }
   
    

}
export default DishDetail;
