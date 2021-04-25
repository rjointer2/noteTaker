// Rich Text Editor from CDEditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';

const SampleEditor = () => {

    const inspiration = () => {
        let quotes = [
            "Write something amazing!",
            "You will something epic today!",
            "Chop Chop! Time to get working",
            "Today is the day you'll...",
            "Let's put that keyboard to work!",
            "This is a demo of the Note Application, go to the new note link to make a real one!",
            "The hardest thing when writing is starting, let's some idea here",
            "Forget what to write? Well that's a problem...",
            "Hello, I'm the text editor. What will you write today?",
            "Cat Videos aren't here but a cool text editor is! ",
        ];

        const randomNum = Math.floor(Math.random() * quotes.length)

        return quotes[randomNum]
    }
    
    return (
        <div>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                color="textSecondary"
            >
                Sample Editor
            </Typography>
            <Box
                m={2} pt={5}
            >
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={(event, editor) => {
                        const data = editor.getData()
                    }}
                    // Placeholder
                    data={inspiration()}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                />
            </Box>
        </div>
    )

}

export default SampleEditor;