
// Dumb Componnents
import DisplayNotes from './noteComponents/DisplayNotes'
import useRequest from '../customHooks/useRequest';

// Home Component 

const Home = () => {
    

    // import our custom hook from useRequest
    const { notes, pending, error, setNotes } = useRequest('http://localhost:8000/notes');

    const deleteNote = (id) => {
        // returns a new state of Notes with id instances removed
        const newNotes = notes.filter(note => note.id !== id)
        // sets the state as a new filter Array 
        setNotes(newNotes)
    }

    return (
        <div className="Home">
            { error && <div>{ error }</div> }
            {/* below make a loading comp */}
            { pending && <div>Loading...</div> }
            { notes && <DisplayNotes notes={notes} title="All Notes" deleteNote={deleteNote}/>}
        </div>
    ) 
    
    // For testing
    /* return {
        setNotes,
        notes,
        fetchNotes
    }  */

}

export default Home;
