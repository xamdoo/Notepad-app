import dashboard from './img/dashboard.png';
import notes from './img/notes.png'
import output from './img/Output.png'
import settings from './img/Settings.png'
import support from './img/Support.png'
import tasks from './img/Tasks.png'
import editor from './img/editor.png'
import privacy from './img/privacy.png'
import Board from './Board';

function Dashboard(){
    return (
        
        <div className="container">
            {/* here is the board which contains the Notelist*/}
            <Board />
            <div className="sidebar">
                <div className='empty'>
                    <div className='circle'></div>
                    <div className='empty-box'></div>
                </div>
                <div className = "sidebar-title">
                    <img src={dashboard} alt='dashboard-icon'/>
                    <h1>Dashboard</h1>
                </div>
                <div className ="sidebar-upper">
                    <div className="home title">
                        <img src={tasks} alt="task-icon"/>Tasks
                    </div>
                    <div className="profile title">
                        <img src={editor} alt="editor-icons"/>Editor
                    </div>
                    <div className="message title">
                        <img src={notes} alt="notes-icon"/>Notes
                    </div>
                    <div className="history title">
                        <img src={output} alt="output-icon"/>Output
                    </div>
                    <div className="tasks title">
                        <img src={settings} alt="setting-icon"/>Settings
                    </div>
                </div>
                <div class="sidebar-lower">
                    <div className="support title">
                        <img src={support} alt="support-icon"/>Support
                    </div>
                    <div className="privacy title">
                        <img src={privacy} alt="privacy-icon"/>Privacy
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;