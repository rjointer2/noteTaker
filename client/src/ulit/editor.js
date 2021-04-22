
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

const editor = new EditorJS({

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




export default editor