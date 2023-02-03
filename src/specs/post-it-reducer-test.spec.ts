import { NotePadState, postItReducer } from "../post-it-reducer";

test('SET NOTE', () => {
    const noteState: NotePadState ={
        notePad: 'Remember to buy milk',
        noteList:[]
    }

    const nextState = postItReducer(noteState, {type:'ADD-NOTE'});
    expect(nextState.noteList).toBe('Remember to buy milk');
    console.log(noteState);
    console.log(nextState);
    
});

