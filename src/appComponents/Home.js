import { useState } from 'react';
import DisplayNotes from './noteComponents/DisplayNotes'

const Home = () => {
    const [notes, setNotes] = useState([
        
    ]);




    

    return (
        <div className="Home">
            <DisplayNotes notes={notes}/>
        </div>
    )

}

export default Home;