
import { renderHook, act } from '@testing-library/react-hooks';
import Home from '../appComponents/Home'


describe('test the fetch request coming in', () => {

    const mockURL = 'http://localhost:8000/notes';

    beforeEach(() => {
        fetch.resetMock();
    })

    it('should get take a function and get the object', (/* args */) => {
        // function fetches the url
        const response = await fetchFun(/* url  */);

        // what should is expected? and should equal
        // we know we want a object ( a promise )
        expect(response).toBe(Promise.resolve(objectContaining(Array)));
        expect(response).toHaveBeenCalledTimes(1);
        expect(response).toHaveBeenLastCalledWith(mockURL)

    })

})



















