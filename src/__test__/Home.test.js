
import { renderHook, act } from '@testing-library/react-hooks';
import Home from '../appComponents/Home'
import fetchMock from 'jest-fetch-mock';
import { render } from 'react-dom';
import { Done } from '@material-ui/icons';


describe('Home Component', () => {
    // passing the callback  function here, telling jest to wait until
    // the callback is called before completing the test
    it('fetches data server when server => a successful req', cb => {
        // our success response
        const mockSuccessRes = {};
        // since we have to awiait the call to res.json we test it agaisn't
        // mockSuccessRes ( since it should be a object )
        const mockJSONPromise = Promise.resolve(mockSuccessRes)
        const MockFetchPromise = Promise.resolve({
            json: () => mockJSONPromise
        });

        jest.spyOn(global, 'fetch').mockImplementation(() => {
            /* 
                Accepts a function that should be used as the implementation
                of the mock. The mock itself will still record all calls that 
                go into and instances that come from itself – the only difference 
                is that the implementation will also be executed when the mock is called.
            */
           return MockFetchPromise
        })
        
        // clearing mock
        global.fetch.mockClear();
        // invoke our callback, this test is completed
        cb()

    });

    it('should return object with correct properties', () => {

        expect(/* import argument */ mockURL).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title: expect.any(String),
                    body: expect.any(String),
                    id: expect.any(Number)
                })
            ])
        )

    })
})


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

    --- Testing useEffect Hook

    clean-up function runs before the component is removed from the UI to prevent memory leaks. 


*/


test('test if deletes object from array', () => {
    const { result } = renderHook(() => Home());

    act(() => {
        result.current.deleteNote(3)
    })

    expect(result.current.notes.length).toBe(2)
})















