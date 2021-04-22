
import { useState } from 'react'

// Editor Block
import editor from '../ulit/editor'

const CreateNote = () => {

    // state of the title
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')
    

    // editorjs with React will not load on first mount
    // if the promise from editorjs is rejected, then 
    // reload the component again to get the editor module

    editor.isReady.catch(error => {
        window.location.reload()
        console.log('test')
    })

    const saveNote = () => {
        editor.save().then((outputData) => {
        console.log(JSON.stringify(outputData.blocks))
        setBody(outputData)
        }).catch((error) => {
        console.log('Saving failed: ', error)
        });
    }

    const data = {
        title: 'test',
        body: 'test body'
    }

    const settings = {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('/api/notes', settings)

    /* const submitForm = async (e) => {
        e.preventDefault();
        const note = {
            title: form.title.value
        }


        await fetch('http://localhost:3001/api/notes', {
            method: 'POST',
            mode: 'no-cors',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(note)
        }).then(() => {
            console.log('check data')
            console.log(note)
        })
    } */

    return (
        <div>
            <form /* onSubmit={submitForm} */>
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
                <input className='hidden'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div id="editorjs"></div>
                <button>
                    Publish
                </button>
            </form>
            <button onClick={saveNote}>
                Save Note
            </button>
        </div>
    )
}

export default CreateNote;