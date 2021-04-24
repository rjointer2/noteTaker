// Rich Text Editor from CDEditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';

const SampleEditor = () => {

    

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
                    data="Write Here..."
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