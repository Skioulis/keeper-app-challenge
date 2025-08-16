import React,{useState} from "react";

function CreateArea(props) {

    // const [title, setTitle] = useState("")
    // const [content, setContent] = useState("")

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
        <button type="button" onClick={()=>{
            setNote({
                title: title,
                content: content
            })
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
