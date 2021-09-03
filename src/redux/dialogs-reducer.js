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
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            return  {
                ...state,
                messages: [...state.messages, {id: 6, text: action.text}]
            };
        }

        default:
            return state;
    }
}

export const sendNewMessageCreator = (text) =>
    ({type: SEND_NEW_MESSAGE, text})


export default dialogsReducer;