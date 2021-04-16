
import { renderHook, act } from '@testing-library/react-hooks';
import Home from '../appComponents/Home'
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();


/* 
    setNote function => gets notes from DB

    the state of the notes array should null or a array
    the array should contain objects containing the properties should include "title", "body", "id"
    the object's properties should include "title", "body", "id"
    expect the length to be greater than ( for this case ) 0
    the values are strings

    setStatus => get the status of the the request
    returns a boolean true or false 
    state is true initially
*/


test('test if deletes object from array', () => {
    const { result } = renderHook(() => Home());

    act(() => {
        result.current.deleteNote(3)
    })

    expect(result.current.notes.length).toBe(2)
})














