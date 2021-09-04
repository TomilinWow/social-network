import {login} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
    initialize: false,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialize: true
            }
        }

        default:
            return state
    }

}

export const initializesSuccess = () =>
    ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(login())

    Promise.all([promise]).then(() => {
        dispatch(initializesSuccess())
    })


}

export default appReducer;