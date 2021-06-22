import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState={
    //exporting the state from Main to here
    dishes: DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS
};
//creating the reducer the function which will recieve the current state and the actions and gives new state instead of modifying 
//state=initialState adding default value to parameter if state is undefined (ES6 way of initialising default value )
export const Reducer=(state=initialState,action)=>
{
    return state;
}