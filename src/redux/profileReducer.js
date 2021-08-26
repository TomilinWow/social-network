const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const ADD_NEW_POST = 'ADD_NEW_POST'

let initialState = {
    posts: [
        {id: 1, text: 'Post'},

    ],
    newMessageBody: ""
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case ADD_NEW_POST:
            let post = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                posts: [...state.posts, {id: 2, text: post}]
            }
        default:
            return state;
    }
}


export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export const addNewPostCreator = () =>
    ({type: ADD_NEW_POST})


export default profileReducer;