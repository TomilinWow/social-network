const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'

let initialState = {
    messages: [
        {id: 1, text: 'Hello'},
    ],
    dialogs: [
        {id: 1, name: 'Egor'}
    ],
    newMessageBody: ""
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_NEW_MESSAGE:
            let post = {
                id: 1,
                text: state.newMessageBody
            };
            state.messages.push(post);
            state.newMessageBody = '';
            return state;

        default:
            return state;
    }
}


export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export const addNewPostCreator = () =>
    ({type: SEND_NEW_MESSAGE})


export default dialogsReducer;