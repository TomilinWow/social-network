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
            state.newMessageBody = action.body;
            return state;
        case ADD_NEW_POST:
            let post = {
                id: 1,
                text: state.newMessageBody
            };
            state.posts.push(post);
            state.newMessageBody = '';
            return state;

        default:
            return state;
    }
}


export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export const addNewPostCreator = () =>
    ({type: ADD_NEW_POST})


export default profileReducer;