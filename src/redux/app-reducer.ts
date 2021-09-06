import {login} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
    initialize: false,
};

export type AppInitialState = typeof initialState
const appReducer = (state = initialState, action: any) : AppInitialState => {

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

type InitializesSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializesSuccess = () : InitializesSuccessType =>
    ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(login())

    Promise.all([promise]).then(() => {
        dispatch(initializesSuccess())
    })

}

export default appReducer;