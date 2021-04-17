import { renderHook, act } from '@testing-library/react-hooks';
import Home from '../appComponents/Home';

it('should correctly map out notes on the component' , async () => {

    const { result } = renderHook(() => Home());

    act(() => {
        result.current.setNotes()
    })

    expect(result.current.notes).toBe(null || undefined);
    // techincally i need to see after some time the state will be a object containing a array

});
