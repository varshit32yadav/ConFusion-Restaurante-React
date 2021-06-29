
import *  as ActionTypes from './ActionTypes';
//now its action creator responsibility to supply it to DISHES reducers
import { DISHES } from '../shared/dishes';

//inorder to communincate with the server 
import { baseUrl } from '../shared/baseUrl';
import { actions } from 'react-redux-form';

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
    return fetch(baseUrl+'dishes')   //ones the dishes are obtained then it will be pushed to redux store ;
    .then(response=>{
        //(server se baatcheet shuru ho gayi hai but promise proxy value failed to get request )
        if(response.ok) return response;
        else{
            var error=new Error('Error'+response.status +':'+response.statusText);
            error.response=response;
            throw error;
        }     
        //(if sever even itself doesnot responds for even having a communincation(i.e when your server is shut(closed)) then use error handler for that )
    }, error=>{
         var errmess=new Error(error.message);
         throw errmess;
    } ).then(response=>response.json()).then(dishes=>dispatch(addDishes(dishes))).catch(error=>dispatch(dishesFailed(error.message)))  ;

 
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

//setting up thunk to fetch comment 
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
//for promotions
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
