import '@testing-library/jest-dom/extend-expect';
import fetch from 'jest-fetch-mock';
import { fetchNotes } from './fetchNotes'

fetch.enableMocks();



it('should get take a function and get the object', async (/* args */) => {
    // function fetches the url
    

    fetch.mockResponseOnce()

    const response = await fetchNotes();

    expect(response).toEqual(expect.any(Object))

    

})