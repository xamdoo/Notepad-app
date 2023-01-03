import { useState } from "react";

function AddNote({handleOnAdd}){
    const [newNote, setNewNote] = useState("")
    const limit = 200;
    const characterLeft = limit - newNote.length;

    const handleOnSave = () => {
		if (newNote.trim().length > 0) {
			handleOnAdd(newNote);
			setNewNote('');
		}
	};

    return(
        <div className='note new'>
            <textarea 
                rows='8' 
                cols='10' 
                placeholder='Type to add note...' 
                maxLength="200"
                onChange={(e)=> {setNewNote(e.target.value)}}
                ></textarea>
            <div className='note-footer'>
                <span>{characterLeft} Remaining</span>
                <button className='save-btn' onClick={handleOnSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;