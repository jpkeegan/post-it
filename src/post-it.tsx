
import { NotePadState, postItReducer } from "./post-it-reducer"
import React, { useReducer } from "react";

const initialNotePadState: NotePadState = {
    notePad: '',
    noteList: []
}

export function PostIt(){

    const [noteState, dispatch] = useReducer(postItReducer, initialNotePadState);

    function handleNoteChange(){
        if(noteState.notePad.length >= 3){
            dispatch({type:'ADD-NOTE'});
        } else {
            alert('Note must be 3 characters or more!')
        }
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        dispatch({type:'SET-NOTE', payload: event.target.value});
    }

    function handleDelete (index:number) {
        dispatch({type:'DELETE-NOTE', payload: index})
    }

    function handleClear(){
        dispatch({type:'CLEAR-NOTES'})
    }

    return<>
        <head>
            <h1>Post-It</h1>
        </head>
        <body>
            <label htmlFor='write'>Write</label>
            <input id='write' type='text' placeholder="Remember Me" onChange={handleInput}></input>
            <button onClick={handleNoteChange}>Add Note</button>
            <button onClick={handleClear}>Clear All</button>

            <ul>
                {
                noteState.noteList.map((note, index) => <li key={index}>{note} 
                <button onClick={()=> handleDelete(index)}>Delete</button></li>)
                }
            </ul>
        </body>
    </>
}