import { ADD_COMMENT } from "../actionTypes";

const addComments = (state= { msgs : [] }, action) => {
    //const [id, content] = state;
    switch(action.type){
        case ADD_COMMENT:
            return { msgs: [...state.msgs, action.payload.content] };
        default: 
            return state
    }
}

export default addComments;