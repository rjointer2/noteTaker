
import { useState, useEffect} from 'react';

const useRequest = (url) => {

    // the state is null initially, but will have out note objects or not
    const [notes, setNotes] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    const fetchNotes = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch(e) {
            throw Error('could not obtain notes')
        }
    }

    useEffect(() => {
        fetchNotes(url).then( data => {
            // set our note's state as the resolve promise 
            setNotes(data);
            // This res isn't pending 
            setPending(false)
            // keep our error state at null 
            setError(null)
        }).catch(error => {
            setError(error.message)
        })
    },[
        /* Our Dependencies */
        url
    ]);

    return { notes, pending, error, setNotes, setPending, setError }

}


export default useRequest;