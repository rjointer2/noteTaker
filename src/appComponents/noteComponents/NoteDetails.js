import { useParams } from "react-router";
import useRequest from "../../customHooks/useRequest";

const NoteDetails = () => {

    // Route Params
    const { id } = useParams()
    const { notes, pending, error } = useRequest('http://localhost:8000/notes/' + id);

    return (
        <div className="noteDetails">
            { pending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            {
                notes && (
                    <article>
                        <h2>
                            { notes.title }
                        </h2>
                        <div>
                            { notes.body }
                        </div>
                    </article>
                )
            }
        </div>
    )

}

export default NoteDetails;