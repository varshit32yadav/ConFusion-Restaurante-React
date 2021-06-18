import React from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';


     //dish  is recieved in form f props
    function RenderDish({dish})
     {
         
        if (dish != null){
        console.log("inside render dish")
        console.log(dish.comments)
            return(
                <>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </>
            );
        }
        else
            return(
                <div></div>
             );
     }
     function RenderComments({comments}) {
         console.log("inside render comments")
         //console.log(comments)
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

    function DishDetail(props)
    { console.log("hello")  
      console.log(props.dish);
              return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12"> 
                    <h3>{props.dish.name}</h3>
                </div>
                </div>
             <div className="row">
               <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                <RenderComments  comments={props.comments} />
               
               </div>
               </div>
            </div>
        );
    }
   
    


export default DishDetail;
