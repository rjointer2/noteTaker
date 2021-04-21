
import { useState } from 'react'

// Editor Block
import editor from '../ulit/editor'

const CreateNote = () => {

    // state of the title
    const [ title, setTitle ] = useState('')
    
    const PostRequest = async (url, object) => {

        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify(object)
        };
    
        try {
            const res = await fetch(url, settings);
            const data = await res.json();
            return data
        } catch (error) {
            return error
        }
    
    }

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
        console.log(outputData.blocks)
        PostRequest('http://localhost:3001/notes', outputData.blocks)
        }).catch((error) => {
        console.log('Saving failed: ', error)
        });
    }

    return (
        <div>
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
            <div id="editorjs"></div>
            <button type="submit" className="btn" onClick={() => {
                saveNote()
            }}>
                Save Note!
            </button>
        </div>
    )
}

export default CreateNote;
