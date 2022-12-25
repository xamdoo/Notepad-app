import { useState } from 'react';
import Notes from "./Notes";
import AddNote from './AddNote';

const NotesList = ()=>{
    const [notes, setNotes] = useState([ {
            text: "Hi",
            date: "12/20/2022"
        },
        {
            text: "Hello",
            date: "12/20/2022"
        },
        {
            text: "Hey",
            date: "12/20/2022"
        },
    ])

    return(
        <div className="notes-list">
            {notes.map((note)=> (<Notes text={note.text} date={note.date}/>))}
            <AddNote />
        </div>
    )
}

export default NotesList;