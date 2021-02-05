import { ADD_COMMENT } from "../actionTypes";

const initialState = {
    loadingData: null
};

const addComments = (state = initialState, action) => {
    //const [id, content] = state;
    switch(action.type){
        case ADD_COMMENT:
            const { content } = action.payload;
            return {
            ...state,
            content
            }
        default: 
            return state
    }
}

export default addComments;