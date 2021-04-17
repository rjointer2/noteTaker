import { useEffect, useState } from 'react';
import DisplayNotes from './noteComponents/DisplayNotes'
import fetchNotes from './../ulit/fetchNotes';

const Home = () => {
    // the state is null initially, but will have out note objects or not
    const [notes, setNotes] = useState(null);

    const deleteNote = (id) => {
        // returns a new state of Notes with id instances removed
        const newNotes = notes.filter(note => note.id !== id)
        // sets the state as a new filter Array 
        setNotes(newNotes)
    }

    // Our clean up function

    useEffect(() => {

        fetchNotes('http://localhost:8000/notes').then( data => {
            // set our notes
            setNotes(data)
        })

    },[
        /* Our Dependencies */
    ])


    /* return (
        <div className="Home">
            { notes && <DisplayNotes notes={notes} title="All Notes" deleteNote={deleteNote}/>}
        </div>
    ) */ 

    // For testing
    return {
        setNotes,
        notes,
        fetchNotes
    } 

}

export default Home;
