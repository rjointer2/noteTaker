
import DisplayNotes from './noteComponents/DisplayNotes'
import useRequest from '../customHooks/useRequest';
import MakeNote from './noteComponents/MakeNote';

const Home = () => {

    // import our custom hook from useRequest
    const { notes, pending, error, setNotes } = useRequest('http://localhost:8000/notes');

    // import slate hook
    


    // deletes a blog *** THIS IS TEMPORARY USAGE, THIS WILL BE A COMPONENT SOON
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
            <MakeNote />
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
