
function DisplayNotes(props) {

    const notes = props.notes;

    console.log(props, notes)

    return (
        <div>
            {notes.map((note) => (
                <div>
                    <h2>{note.title}</h2>
                    <p>Here is your note!</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayNotes;