
// Editor Block
import editor from '../ulit/editor'

const CreateNote = () => {

    // editorjs with React will not load on first mount
    // if the promise from editorjs is rejected, then 
    // reload the component again to get the editor module

    editor.isReady.then(res => {
        if(res === undefined) {
            console.log('reload')
        }
    }).catch(error => {
        window.location.reload()
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
            <form>
                <label>
                    Note Tile
                </label>
                <input 
                    type="text"
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