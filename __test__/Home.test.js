
import {render} from '@testing-library/react';
import { renderHook, act } from 'react';
import Home from '../src/appComponents/Home'
import fetcchMock from 'jest-fetch-mock';

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


describe('test our hook deletes note object', () => {

    const { result } = renderHook(() => Home());

    act(() => {
        result.current.deleteNote()
    })

    expect(result.current.notes.length).toBe(2)

})

















describe("test our hook's functionally", () => {

    const { result } = renderHook(() => /* our hook */ DisplayNotes());

    act(() => {
        result.current.setNote() /* property of our component */
        result.current
    })

    

    /* // just for this case the length of the array should be at least
    // expecting our state to return a length of 1

    test('state to be null or a Array', () => {
        expect(result.current.notes.length).toBe(null || expect.any(Array));
    })

    test('check properties', () => {
        expect(properties.hasOwnProperty('title')).toBe(true)
        expect(properties.hasOwnProperty('body')).toBe(true)
        expect(properties.hasOwnProperty('id')).toBe(true)
    });

    test('test if')
    
    // mocking fecth

    test('make post request', () => {
        expect(postNote()).toBe( {title: expect.any(String), body: expect.any(String), id: expect.any(String)})
    })

    test('get response', async () => {
        fetch.mockResponse(() => {
            postNote().then(res => (
                {title: expect.any(String), body: expect.any(String), id: expect.any(String)}
            ))
        })
    })
 */

})

