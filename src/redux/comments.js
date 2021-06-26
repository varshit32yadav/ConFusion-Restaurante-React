import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';
//Comments is a reducer 
export const  Comments=(state=COMMENTS,action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:     //when case matches reducer function does something to the state
        var comment = action.payload;
        comment.id = state.length;
        comment.date = new Date().toISOString();
        console.log("Comment: ", comment);
        return state.concat(comment); //so now the new object(comment) in the array of object(COMMENTS) list is added. 
            //we r only adding in the memory so when u restatr your applicaton all the comments that you will add to the form willbe lost completely .We will handle that later 

        default:
            return state;    


    }
    
    };