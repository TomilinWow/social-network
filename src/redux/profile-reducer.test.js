import profileReducer, {addNewPost} from "./profile-reducer";

let initialState = {
    posts: [
        {id: 1, text: 'Post'},

    ],
};

test('new post should be added', () => {
    let action = addNewPost('text')

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(4)

});

