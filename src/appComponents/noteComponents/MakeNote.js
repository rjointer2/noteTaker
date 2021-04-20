import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

const editor = new EditorJs({

    // Where the content is outputted

    // this is outputtimg multiple lines of text 
    // and only the last time for the text is saving the block array
    holder: 'editorjs',
    placeholder: 'Let`s write an awesome story!',

    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link']
        }
    },
    list: {
        class: List,
        inlineToolbar: [
            'link',
            'bold'
        ]
    },
    embed: {
        class: Embed,
        inlineToolbar: false,
        config: {
            services: {
                youtube: true,
                coub: true
            }
        }
    }

});

const saveNote = () => {
    editor.save().then((outputData) => {
    console.log('Article data: ', outputData)
    }).catch((error) => {
    console.log('Saving failed: ', error)
    });
}

const MakeNote = () => {

    // can't have this 
    
    return (
        <div>
            <div id="editorjs"></div>
            <button className="btn" onClick={saveNote}>
                Save Note!
            </button>
        </div>
    )
}

export default MakeNote;