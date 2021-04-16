
const DisplayNotes = ({notes, title, deleteNote}) => {

    return (
        <div>
            <h2>{ title }</h2>
            {notes.map((note) => (
                <div>
                    <h3>{note.title}</h3>
                    <p>Here is your note!</p>
                    <button onClick={() => deleteNote(note.id)}>
                        Delete Note
                    </button>
                </div>
            ))}
        </div>
    )
}

export default DisplayNotes;