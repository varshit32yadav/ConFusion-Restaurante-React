//we are splitting reducers as the objects in the master state were independent of eachother 
//so we made seperate reducers for each state object and later we will combine them in store 

import *  as ActionTypes from './ActionTypes';
 // Dishes is Reducer and DISHES is independent state object                                                      
export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};                                                                                                            