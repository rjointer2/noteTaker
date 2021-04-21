import { useState } from "react";

const Home = () => {

    const [notes, setNotes] = useState(null);
    

    const getNotes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data
    }

    getNotes('/api/notes').then(res => {
        setNotes(res)
    })  



    return (
        <div>
            Hi
            { notes.map(note => <p key={note.id}>{note.title}</p>) }
        </div>
    )

}

export default Home;