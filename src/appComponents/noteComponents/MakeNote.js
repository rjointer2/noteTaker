
const MakeNote = ({saveNote, editor}) => {
    
    return (
        <div>
            <div id="editorjs"></div>
            <button className="btn" onClick={() => saveNote()}>
                Save Note!
            </button>
        </div>
    )
}

export default MakeNote;