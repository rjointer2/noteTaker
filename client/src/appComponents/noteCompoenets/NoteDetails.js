import { useState } from "react";
import { useParams } from "react-router-dom";

const NoteDetails = () => {

    const { id } = useParams()
    const [ noteData, setNoteData ] = useState(null)

    const getData = async () => {
        const res = await fetch('/api/notes')
        const data = await res.json()
        return data
    }

    getData().then( data => {
        for(let i = 0; i < data.length; i++ ) {
            if( id === data[i].id ) setNoteData(data[i].id)
        }
    })
     
    return (
        <div>
            {
                noteData && (
                    <h2>
                        { noteData }
                    </h2>
                )
            }
        </div>
    )

}

export default NoteDetails;