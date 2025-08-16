import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";


function App() {

    const [allNotes, setNotes] = useState(notes);

    function addNote(note) {
        const newNote = {
            key: allNotes.length + 1,
            title: note.title,
            content: note.content
        }
        setNotes(prevNotes => {
        return [...prevNotes, newNote]
        });
        // alert(title + " " + content);
    }

    // function deleteItem(id) {
    //     setItems(prevItems => {
    //         return prevItems.filter((item, index) => {
    //             return index !== id;
    //         });
    //     });
    // }

    function deleteNote(id) {
        console.log("delete" + id);
        setNotes(prevNotes => {
            return prevNotes.filter((note) => {
                return note.key !== id;
            });
        });
    }

    return (
        <div>
          <Header />
          <CreateArea
            onAdd={addNote}
          />
            {allNotes.map(note => <Note
                key={note.key}
                id={note.key}
                title={note.title}
                content={note.content}
                deleteNote={deleteNote}
            />)}
          {/*<Note key={1} title="Note title" content="Note content" />*/}
          <Footer />
        </div>
    );
}

export default App;
