
export type NotePadState = {
  notePad: string ,
  noteList: string[]
};

export type AddAction = { type: 'ADD-NOTE'};
export type setNotePad = {type: 'SET-NOTE', payload: string};
export type deleteNote = {type: 'DELETE-NOTE', payload: number};
export type clearNotes = {type: 'CLEAR-NOTES'}
export type noteAction = AddAction | setNotePad | deleteNote | clearNotes;

export function postItReducer(state: NotePadState, action: noteAction): NotePadState {
    const newState: NotePadState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'ADD-NOTE':
            newState.noteList.push(newState.notePad);
            return newState;
        case 'SET-NOTE':
            newState.notePad = action.payload
            return newState;
        case 'DELETE-NOTE':
            newState.noteList.splice(action.payload, 1);
            return newState;
        case 'CLEAR-NOTES':
            newState.noteList = [];
            return newState;
    }
}
