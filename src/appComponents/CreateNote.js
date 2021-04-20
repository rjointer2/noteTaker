
import { useState } from 'react'


// Editor Block
import editor from '../ulit/editor'

const CreateNote = () => {

    // state of the title
    const [ title, setTitle ] = useState('')

    // editorjs with React will not load on first mount
    // if the promise from editorjs is rejected, then 
    // reload the component again to get the editor module

    editor.isReady.catch(error => {
        window.location.reload()
        console.log('test')
    })

    const saveNote = () => {
        editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
        }).catch((error) => {
        console.log('Saving failed: ', error)
        });
    }

    return (
        <div className="createNote">
            <h2>
                Make New Note!
            </h2>
            <form action="">
                <label>
                    Note Title
                </label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </form>
            <label>
                Note Body:
            </label>
            <div id="editorjs"></div>
            <button className="btn" onClick={() => saveNote()}>
                Save Note!
            </button>
        </div>
    )
}

export default CreateNote;