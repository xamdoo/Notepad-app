import { MdDeleteForever } from 'react-icons/md'

function Notes(){

    return(
        <div className="note">
            <span>Hello, this is my first note!!!!</span>
            <div className="note-footer">
                <small>12/20/2022</small>
                <MdDeleteForever className='delete-btn' size='1.3em' aria-hidden="true"/>
            </div>

        </div>
    )
}


export default Notes;