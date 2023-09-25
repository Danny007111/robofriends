import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    searchField: ''
}

// 1st Reducer function
export const searchRobots = ( state = initialState, action = {} ) => {
    // Could use (if), but (switch) is more convenient bc we have multiple cases/action.
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}