
import { useParams } from "react-router";
import useFetch from "../../customHooks/useFetch";


const NoteDetails = () => {

    const { id } = useParams()
    const { data: note, pending, error } = useFetch('/api/notes/');

    let noteData = undefined;

    (function() {
        if(note === null) return false

        for(let i = 0; i < note.length; i++) {
            if(note[i].id === id) return noteData = note[i]
            console.log('oop')
        }
    })()

    console.log('hi')

    return (
        <div>
            { error && <div>{error}</div> }
            { pending && <div>Loading...</div> }
            { /* Displays Notes from API */ }
            { note && (
                <div>
                    <h2>
                        { noteData.title }
                    </h2>
                    <p>
                    { noteData.body }
                    </p>
                </div>
            )}
        </div>
    )

}

export default NoteDetails;