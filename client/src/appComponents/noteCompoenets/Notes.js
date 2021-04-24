
import { Link } from 'react-router-dom'

// Material UI Components

import Typography  from '@material-ui/core/Typography'
import Button  from '@material-ui/core/Button'
import { Box, Paper } from '@material-ui/core'

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
            <Box
                m={2} pt={3}
            >
                <Paper
                    align="center"
                    
                >
                    {/* Maps out notes */}
                    {data.map((note) => (
                        <div key={note.id}>
                            {/* Links to NoteDetails Component */}
                            <Link to={`/api/notes/${note.id}`}>
                                <h3>{note.title}</h3>
                            </Link>
                            <p>{ note.summary }</p>
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
                </Paper>
            </Box>
        </div>
    )

}

export default Notes;