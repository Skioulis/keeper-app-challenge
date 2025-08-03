import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import notes from '../notes.js';
import note from "./Note.jsx";

function App() {
    return (
        <>
            <Header/>
            {notes.map(note => <Note key={note.key} title={note.title} content={note.content}/>)}
            <Footer/>

        </>
    );
}

export default App;