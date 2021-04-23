
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useHistory, useParams } from "react-router";
import useFetch from "../../customHooks/useFetch";
import { useState } from 'react'


const NoteDetails = () => {

    const { id } = useParams()
    const { data: note, pending, error } = useFetch('/api/notes/');

    const history = useHistory();

    // state of the title
    const [ title, setTitle ] = useState('')
    const [text, setText] = useState('')

    let noteData = undefined;

    (function() {
        if(note === null) return false

        for(let i = 0; i < note.length; i++) {
            if(note[i].id === id) {
                noteData = note[i]
                
            }
            console.log('oop')
        }
    })()

    console.log('hi')

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