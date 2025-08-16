import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";


function App() {

    const [allNotes, setNotes] = useState(notes);

    function addNote(title,content) {
        const newNote = {
            key: allNotes.length + 1,
            title,
            content
        }
        setNotes(prevNotes => {
        return [...prevNotes, newNote]
        });
        // alert(title + " " + content);

    }

    return (
        <div>
          <Header />
          <CreateArea
            onAdd={addNote}
          />
            {allNotes.map(note => <Note key={note.key} title={note.title} content={note.content}/>)}
          {/*<Note key={1} title="Note title" content="Note content" />*/}
          <Footer />
        </div>
    );
}

export default App;
