import rerenderEntireTree from "../render";

let state = {
  profilePage: {
    postData: [
    {id: 1, post: 'Hi, how are you?', myrrCount: 15},
    {id: 2, post: 'My first post!', myrrCount: 25},
  ]
  },
  
  dialogsPage: {
    dialogData: [
    {id: 1, name: 'Nik'},
    {id: 2, name: 'Nikolai'},
    {id: 3, name: 'Veronika'},
  ]
  },

  messagePage: {
    messageData: [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you feeling?'},
    {id: 3, message: 'What are you doing?'},
  ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    post: postMessage,
    myrrCount: 0
  };
  state.profilePage.postData.push (newPost);
  rerenderEntireTree (state);
}

export default state