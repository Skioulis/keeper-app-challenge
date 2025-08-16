import React,{useState} from "react";

function CreateArea(props) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={content} onChange={(e)=>{setContent(e.target.value)}}/>
        <button type="button" onClick={()=>{
            const note = {title: title, content: content};
            props.onAdd(note);
            setTitle("");
            setContent("");
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
