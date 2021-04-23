
import useFetch from "../customHooks/useFetch";
import Notes from "./noteCompoenets/Notes";

const Home = () => {

    // custom hook to fetch from our api
    const { data, pending, error, setNotes } = useFetch('/api/notes');

    console.log(data)
    
    const deleteNote = (id) => {
        // return a new state of the Note
        const newNotes = data.filter(note => note.id === id)
        // sets the state as a filtered array
        setNotes(newNotes)
    }


    return (
        <div>
            Hi
            { error && <div>{error}</div> }
            { pending && <div>Loading...</div> }
            { /* Displays Notes from API */ }
            { data && <Notes data={data} title="All Notes" deleteNote={deleteNote} />}
        </div>
    )

}

export default Home;