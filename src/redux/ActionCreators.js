
import *  as ActionTypes from './ActionTypes';

//creating an action ojecct  that will return a  javascript object
export const addComment=(dishId,rating ,author,comment)=>({

    type:ActionTypes.ADD_COMMENT,
     //contains data to be carried in the action object to the reducer function
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});
