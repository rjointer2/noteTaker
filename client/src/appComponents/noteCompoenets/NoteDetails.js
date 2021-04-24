
// Rich Editor from CDEDITOR for React

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// React hooks imported from react library react

import { useHistory, useParams } from "react-router";
import useFetch from "../../customHooks/useFetch";
import { useState } from 'react'


const NoteDetails = () => {

    const { id } = useParams()
    // Custom Hook to fetch data
    const { data: note, pending, error } = useFetch('/api/notes/');


    // to redirect to the home page
    const history = useHistory();

    // state of the title and body for the CDEditor
    // Will implement the setTitle for a future input form
    const [ title, setTitle ] = useState('');
    const [text, setText] = useState('');


    // This will hold the reference of our defined the IIFE compares
    // the correct id

    // This is a state variable to aviod a infinite loop
    let noteData = undefined;

    (function() {
        // When immediately invoked if the state if from our useFetch is null 
        // don't run the rest if code below
        if(note === null) return false

        // After first load bubble through the response object array
        // compare the id with the param's id and set the variable 
        // noteData as the object compared
        for(let i = 0; i < note.length; i++) {
            if(note[i].id === id) {
                noteData = note[i]
                
            }
            // We don't techincally need a error because our useFetch handle
            // if the state reminds null
            console.log('oop')
        }
    })()

    // This state vaiable will be sent as a reference form this object
    const reqBody = {
        title: title,
        body: text
    }

    // DELETE request

    const deleteRequest = (e) => {

        e.preventDefault();
        fetch('/api/notes/' + noteData.id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }).then(() => {
                history.push('/')
        })

    }

    // PUT Request 

    const putRequest = (e) => {

        e.preventDefault();
        fetch('/api/notes/' + noteData.id, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }).then(() => {
            history.push('/')
        })

    }
 
    return (
        <div>
            { error && <div>{error}</div> }
            { pending && <div>Loading...</div> }
            { /* Displays Notes from API */ }
            { note && (
                <div>
                    <h2>
                        { noteData.title }
                    </h2>
                    <h2>
                        { noteData.summary }
                    </h2>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                                console.log(data)
                            }}
                            data={noteData.body}
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                        />
                        <button onClick={putRequest}>
                            Update Note
                        </button>
                        <button onClick={deleteRequest}>
                            Delete Note
                        </button>
                </div>
                
            )}
        </div>
    )

}

export default NoteDetails;