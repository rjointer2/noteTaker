
import { Link } from 'react-router-dom'

// Material UI Components

import Typography  from '@material-ui/core/Typography'
import Button  from '@material-ui/core/Button'

const Notes = ({data, title, deleteNote}) => {
    
    return (
        <div>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                color="textSecondary"
            >
                { title }
            </Typography>
            {/* Maps out notes */}
            {data.map((note) => (
                <div key={note.id}>
                    {/* Links to NoteDetails Component */}
                    <Link to={`/api/notes/${note.id}`}>
                        <h3>{note.title}</h3>
                    </Link>
                    <p>Here is your note!</p>
                    {/* Hides Notes by filtering them */}
                    <Button 
                        onClick={() => deleteNote(note.id)}
                        type="submit"
                        color="default"
                    >
                        Hide Note
                    </Button>
                </div>
            ))}
        </div>
    )

}

export default Notes;