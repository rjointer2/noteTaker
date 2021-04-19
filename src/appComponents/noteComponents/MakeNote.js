
import editor from '../../ulit/editorTemplate';
import noteFunctions from '../../ulit/__noteFunctions';

const MakeNote = () => {

    
    return (
        <div>
            <div id="editorjs"></div>
            <button className="btn" onClick={noteFunctions.saveNote}>
                Save Note!
            </button>
        </div>
    )
}

export default MakeNote;