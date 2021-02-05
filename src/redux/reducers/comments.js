import { ADD_COMMENT } from "../actionTypes";

const initialState = [];

const addComments = (state = initialState, action) => {
    switch(action.type){
        case ADD_COMMENT:
            const { id, content } = action.payload;
            return {
            ...state,
            [id]: {content}
            }
        default: 
            return state
    }
}

export default addComments;