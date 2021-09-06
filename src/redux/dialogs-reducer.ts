const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'

type MessageType = {
    id: number,
    text: string
}

type DialogType = {
    id: number,
    name: string
}

let initialState = {
    messages: [
        {id: 1, text: 'Hello'},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Egor'},

    ] as Array<DialogType>,
};

export type DialogsStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) : DialogsStateType => {

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

type SendNewMessageCreatorType = {
    type: typeof SEND_NEW_MESSAGE,
    text: string
}
export const sendNewMessageCreator = (text: string) : SendNewMessageCreatorType =>
    ({type: SEND_NEW_MESSAGE, text})


export default dialogsReducer;