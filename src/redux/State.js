let rerenderEntireTree = () => {
    console.log('state change');
};

let state = {
    profilePage: {
        posts: [
            { id: 1, post: 'Hi, how are you?', myrrCount: 15 },
            { id: 2, post: 'My first post!', myrrCount: 25 },
        ],
        newPostText: 'it-kamasutra.com',
    },

    dialogsPage: {
        dialogData: [
            { id: 1, name: 'Nik' },
            { id: 2, name: 'Nikolai' },
            { id: 3, name: 'Veronika' },
        ],
    },

    messagePage: {
        messageData: [
            { id: 1, message: 'Hello!' },
            { id: 2, message: 'How are you feeling?' },
            { id: 3, message: 'What are you doing?' },
        ],
    },
};

export const addPost = postMessage => {
    let newPost = {
        id: 4,
        post: state.profilePage.newPostText,
        myrrCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = observer => {
    rerenderEntireTree = observer;
};

export default state;
