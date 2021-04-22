import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const NoteDetails = () => {

    const { id } = useParams()
    const [ noteData, setNoteData ] = useState(null)
    const history = useHistory();

    const getData = async () => {
        const res = await fetch('/api/notes')
        const data = await res.json()
        return data
    }

    getData().then( data => {
        for(let i = 0; i < data.length; i++ ) {
            if( id === data[i].id ) setNoteData(data[i])
        }
    })


    const handleClick = () => {
        fetch('/api/notes/' + noteData.id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noteData)
        }).then(() => {
            history.push('/')
        })
    }
     
    return (
        <div>
            {
                noteData && (
                    <div>
                        <h2>
                            { noteData.title }
                        </h2>
                        <p>
                            { noteData.body }
                        </p>
                        <button onClick={handleClick}> 
                            Delete Note
                        </button>
                    </div>
                )
            }
        </div>
    )

}

export default NoteDetails;