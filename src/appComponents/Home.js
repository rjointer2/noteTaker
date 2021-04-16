import { useState } from 'react';
import DisplayNotes from './noteComponents/DisplayNotes'

const Home = () => {
    const [notes, setNotes] = useState([
        {"title": "notes", "body": "note...", "id": 1},
        {"title": "notes", "body": "note...", "id": 2},
        {"title": "notes", "body": "note...", "id": 3}
    ]);

    const deleteNote = (id) => {

    }


    

    return (
        <div className="Home">
            <DisplayNotes notes={notes} title="All Notes"/>

        </div>
    )

}

export default Home;