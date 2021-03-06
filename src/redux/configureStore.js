import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//importing all reducers 
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { InitialFeedback } from "./forms";
import { createForms } from "react-redux-form";

export const ConfigureStore=()=>{
    const store=createStore(
        //combining all reducers
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            comments:Comments,
            promotions:Promotions,
            ...createForms({
                feedback:InitialFeedback
            })

        }),
        //to enhance our store 
        applyMiddleware(thunk,logger)
    );
        return store;// created our store
    
    };
//When something happens in the app: The UI dispatches an action. The store runs the reducers, and the state is updated based on what occurred.
// The store notifies the UI that the state has changed.
/*
first dispatch(action) works which triggers the change in state ...then state ke andar k reducers will start working with(currentState,action) an will give the new state 

MApDispatchtoProps will make action creator js object available as a prop .
*/