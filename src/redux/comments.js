import * as ActionTypes from './ActionTypes';
//Comments is a reducer 
export const  Comments=(state={errMess:null,comments:[]},action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:     //when case matches reducer function does something to the state
        var comment = action.payload;
        return {...state,comments:state.comments.concat(comment)}; //so now the new object(comment) in the array of object(COMMENTS) list is added. 
            //we r only adding in the memory so when u restatr your applicaton all the comments that you will add to the form willbe lost completely .We will handle that later 

        default:
            return state;    


    }
    
    };