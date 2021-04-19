import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/editorjs';
import List from '@editorjs/editorjs';
import Embed from '@editorjs/editorjs';

const editor = new EditorJs({

    // Where the content is outputted
    holder: 'editorjs',

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

export default editor;