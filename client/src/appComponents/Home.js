
import useFetch from "../customHooks/useFetch";
import Notes from "./noteCompoenets/Notes";

// Material UI Component

import Grid from '@material-ui/core/Grid'
import { Paper } from "@material-ui/core";
import SampleEditor from "./SampleEditor";

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
            { error && <div>{error}</div> }
            { pending && <div>Loading...</div> }
            { /* Displays Notes from API */ }
            <Grid container>
                <Grid item xs={12} sm={6}>
                { data && <Notes data={data} title="All Notes" deleteNote={deleteNote} />}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SampleEditor />
                </Grid>
            </Grid>
            
        </div>
    )

}

export default Home;