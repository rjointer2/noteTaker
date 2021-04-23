
import { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const CreateNote = () => {

    // state of the title
    const [ title, setTitle ] = useState('')
    const [text, setText] = useState('')

    // function to submit to post a request to server and save the data

    const submitForm = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            body: text
        }
        // settings for the post request are defined 
        const settings = {
            method: 'POST', 
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    
        fetch('/api/notes', settings)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>
                    Note Title
                </label>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>
                    Body
                </label>
                <CKEditor
                    editor={ ClassicEditor }
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setText(data)
                        console.log(data)
                    }}
                    data="Write Here..."
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    
                />


                <button>
                    Publish
                </button>
            </form>
            
        </div>
    )
}

export default CreateNote;