import { CHANGE_SEARCH_FIELD } from "./constants";

// export const setSearchField = (text) => ({
//     // action(all CAPS... so we could get spelling errors)
//     type: CHANGE_SEARCH_FIELD,
//     // sending what ever data is needed to go on to the produces(what ever the user enters.)
//     payload: text
// })

export const setSearchField = (text) => {
    console.log(text);
    // action(all CAPS... so we could get spelling errors)
    return {
        type: CHANGE_SEARCH_FIELD,
        // sending what ever data is needed to go on to the produces(what ever the user enters.)
        payload: text
    }
}
