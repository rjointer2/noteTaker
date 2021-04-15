import { useState } from 'react';
import DisplayNotes from './noteComponents/DisplayNotes'

const Home = () => {
    const [notes, setNotes] = useState([
        {title: 'note', body: 'note...', id: 1},
        {title: 'note', body: 'note...', id: 2},
        {title: 'note', body: 'note...', id: 3}
    ])

    return (
        <div className="Home">
            <DisplayNotes notes={notes}/>
        </div>
    )

}

export default Home;