
import { useState } from 'react';

// Rich Text Editor from CDEditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Material UI Components

import Button  from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';

import { useHistory } from "react-router";

const CreateNote = () => {

    // state of the title
    const [ title, setTitle ] = useState('')
    const [ summary, setSummary ] = useState('')
    const [text, setText] = useState('')

    // to redirect to the home page
    const history = useHistory();

    // function to submit to post a request to server and save the data

    const submitForm = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            summary: summary,
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
    
        fetch('/api/notes', settings).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="center">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <form onSubmit={submitForm}>
                    <label>
                        Note Title&nbsp;
                    </label>
                    <input 
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br></br>
                    <label>
                        Summary&nbsp;
                    </label>
                    <input 
                        type="text"
                        name="title"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                    <br></br>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                            console.log(data)
                        }}
                        // Placeholder
                        data="Write Here..."
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                    />

                    <Button
                        endIcon={<CreateIcon />}
                        type="submit"
                    >
                        Publish Notes
                    </Button>
                </form>
            </Grid>
            
        </div>
    )
}

export default CreateNote;