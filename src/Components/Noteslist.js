
import Notes from "./Notes";
import AddNote from './AddNote';
import { useState } from "react";

const NotesList = ()=>{

    
    const [notes, setNotes] = useState([]);

    const handleOnAdd = (text) => {
        const newNote = {
                id: notes[notes.length - 1] ? notes[notes.length - 1].id + 1 : 1,
                text: text,
                date: new Date().toLocaleDateString()
            };
            setNotes([...notes, newNote]);
        };

    const handleOnDelete = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return(
        <div className="notes-list">

            {notes.map((note)=> (
            <Notes 
                id={note.id} 
                text={note.text} 
                date={note.date}
                handleOnDelete={handleOnDelete}/>))}
            <AddNote handleOnAdd={handleOnAdd}/>
        </div>
    )
}

export default NotesList;