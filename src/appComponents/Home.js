import { useState } from 'react';
import DisplayNotes from './noteComponents/DisplayNotes'

const Home = () => {
    const [notes, setNotes] = useState([
        {"title": "notes", "body": "note...", "id": 1},
        {"title": "notes", "body": "note...", "id": 2},
        {"title": "notes", "body": "note...", "id": 3}
    ]);

    const deleteNote = (id) => {
        // returns a new state of Notes with id instances removed
        const newNotes = notes.filter(note => note.id !== id)
        // sets the state as a new filter Array 
        setNotes(newNotes)
    }


    return (
        <div className="Home">
            <DisplayNotes notes={notes} title="All Notes" deleteNote={deleteNote}/>

        </div>
    ) 

    // For testing
    /* return {
        deleteNote,
        notes
    } */

}

export default Home;