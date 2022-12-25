import bell from './img/bell.png'
import magnify from './img/search.png'
import profile from './img/profile.png'
import NotesList from './Noteslist';

function Board(){

    return (
        <div className="header">
            <div className="upper-header">
                <div className="upper-header-left">
                    <img src={magnify} alt='search'/>
                    <input type="search" placeholder="Search"/>
                </div>
                <div className="upper-header-right">
                    <img className="notification-bell" src={bell} alt='notification'/>
                    <img className="profile-pic" src={profile} alt='profile' />
                    <h2>Hello, User!</h2>
                </div>
            </div>  
            <div className='note-container'>
                {/* here is the NOTELIST*/}
                <NotesList />
            </div>
        </div>
    )
}




export default Board;