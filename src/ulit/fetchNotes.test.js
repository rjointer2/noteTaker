import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from '@testing-library/react-hooks';
import Home from '../appComponents/Home';

import fetch from 'jest-fetch-mock';
import fetchNotes from './fetchNotes'
import { useState } from 'react';

fetch.enableMocks();



it('should get take a function and get the object', async (/* args */) => {
    // function fetches the url and return object

    fetch.mockResponseOnce(JSON.stringify({
        "notes": [
            {"title": "notes", "body": "note...", "id": 1},
            {"title": "notes", "body": "note...", "id": 2},
            {"title": "notes", "body": "note...", "id": 3}
        ]
    }))

    const response = await fetchNotes();

    expect(response).toEqual(expect.any(Object));   
    
});


