import { useState } from "react";
import useFetch from "../customHooks/useFetch";
import Notes from "./noteCompoenets/Notes";

const Home = () => {

    // custom hook to fetch from our api
    const { notes, pending, error, setNotes } = useFetch('/api/notes');

    const deleteNote = (id) => {
        // return a new state of the Note
        const newNotes = notes.filter(note => note.id == id)
        // sets the state as a filtered array
        setNotes(newNotes)
    }

    fetch('/api/notes', { method: 'POST', body: 'some test data'}).then(res => res.json())

    return (
        <div>
            Hi
            { error && <div>{error}</div> }
            { pending && <div>Loading...</div> }
            { /* Displays Notes from API */ }
            { notes && <Notes notes={notes} title="All Notes" deleteNote={deleteNote} />}
        </div>
    )

}

export default Home;