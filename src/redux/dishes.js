import { DISHES } from '../shared/dishes';
//we are splitting reducers as the objects in the master state were independent of eachother 
//so we made seperate reducers for each state object and later we will combine them in store 
export const Dishes=(state=DISHES,action)=>{          // Dishes is Reducer and DISHES is independent state object
    switch(action.type)
    {
        default:
            return state;
    }


};