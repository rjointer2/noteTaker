
function DisplayNotes(props) {

    const notes = props.notes;


    return (
        <div>
            {notes.map((note) => (
                <div>
                    <h2>{note.title}</h2>
                    <p>Here is your note!</p>
                    <button onClick={() => deleteNote(note.id)}>
                        Delete Note
                    </button>
                </div>
            ))}
        </div>
    )
}

export default {DisplayNotes};