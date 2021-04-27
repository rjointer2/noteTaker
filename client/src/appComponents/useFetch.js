
import { useState, useEffect } from 'react';

const useFetch = (url) => {

    // State Values
    const [data, setNotes] = useState(null);
    const [pending, setPending] = useState(true); 
    const [error, setError] = useState(null);

    // trys to fetch data or catch errors
    const fetchRequest = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch(e) {
            throw Error('could not obtain notes')
        }
    }

    useEffect(() => {

        const abortController = new AbortController();

        fetchRequest(url, { signal: abortController.singal }).then( data => {
            // set our note's state as the resolve promise 
            setNotes(data);
            // This res isn't pending 
            setPending(false)
            // keep our error state at null 
            setError(null)
        }).catch(error => {
            if( error.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setPending(false)
                setError(error.message)
            }
        })

        return () => abortController.abort();
    },[
        /* Our Dependencies */
        url
    ]);

    return { data, pending, error, setNotes, setPending, setError }
}

export default useFetch