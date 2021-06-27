
import *  as ActionTypes from './ActionTypes';
//now its action creator responsibility to supply it to DISHES reducers
import { DISHES } from '../shared/dishes';

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
//creating a thunk(fetchDishes) that will return a function containing an inner function
// the inner function of thunk gets access to dispatch here  

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
