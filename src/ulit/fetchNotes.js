const fetchNotes = async () => {
    try {
        const res = await fetch('http://localhost:8000/notes');
        const data = await res.json();
        return data;
    } catch(e) {
        return null
    }


}

export default fetchNotes