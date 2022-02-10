import React from 'react';
import css from './App.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Information from './Information/Information';
import MayMessages from './Information/MayMessages/MayMessages';
import { Route } from 'react-router-dom';

const App = props => {
    return (
        <div className='wrapper'>
            <audio autoplay='autoplay'>
                <source
                    src='https://soundcloud.com/beat106scotland/bonkers-beats-39-on-beat-106?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                    type='audio/ogg; codecs=vorbis'
                />
                <source
                    src='https://soundcloud.com/beat106scotland/bonkers-beats-39-on-beat-106?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                    type='audio/mpeg'
                />
            </audio>
            <Header />
            <NavBar />
            <div className={css.paper}>
                <Route
                    path='/maymessages'
                    render={() => (
                        <MayMessages dialogsPage={props.state.dialogsPage} messagePage={props.state.messagePage} />
                    )}
                />
                <Route
                    path='/information'
                    render={() => (
                        <Information
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default App;
