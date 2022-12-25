
function AddNote(){
    
    return(
        <div className='note new'>
            <textarea 
                rows='8' 
                cols='10' 
                placeholder='Type to add note...' 
                maxLength="200"
            ></textarea>
            <div className='note-footer'>
                <span>200 Remaining</span>
                <button className='save-btn'>Save</button>
            </div>
        </div>
    )
}

export default AddNote;