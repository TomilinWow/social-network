const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'

let initialState = {
    messages: [
        {id: 1, text: 'Hello'},
    ],
    dialogs: [
        {id: 1, name: 'Egor'},
        {id: 1, name: 'Tima'},
        {id: 1, name: 'Alex'}
    ],
    newMessageBody: ""
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_NEW_MESSAGE: {
            let body = state.newMessageBody
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, text: body}]
            };
        }

        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export const sendNewMessageCreator = () =>
    ({type: SEND_NEW_MESSAGE})


export default dialogsReducer;