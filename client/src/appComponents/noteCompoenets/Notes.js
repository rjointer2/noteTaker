
const Notes = ({notes, title, deleteNote}) => {
    
    return (
        <div>
            <h2>{ title }</h2>
            {notes.map((note) => (
                <div key={note.id}>
                   {/*  <Link to={`/notes/${note.id}`}>
                        <h3>{note.title}</h3>
                    </Link> */}
                    <p>Here is your note!</p>
                    <button onClick={() => deleteNote(note.id)}>
                        Delete Note
                    </button>
                </div>
            ))}
        </div>
    )

}

export default Notes;