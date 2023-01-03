import { MdDeleteForever } from 'react-icons/md'

function Notes({id, text, date, handleOnDelete }){

    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-btn' size='1.3em' aria-hidden="true"
                onClick={()=>{handleOnDelete(id)}}/>
            </div>

        </div>
    )
}


export default Notes;