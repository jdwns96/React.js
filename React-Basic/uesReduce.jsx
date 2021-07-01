import React, { useReducer } from 'react';


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RENAME = 'RENAME';

const reducer = (state, action) => {
    switch(action.type){
        case INCREMENT: 
            return {
                ...state,
                age: state.age + 1 
            };
        case DECREMENT:
            return {
                ...state,
                age: state.age - 1
            };
        case RENAME:
            return {
                ...state,
                name: action.name
            };
        default :
            return state;
    }
}

const initialState = {
    age: 20,
    name: 'default'
}


const Test = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const upClickHandler = e => {
        dispatch({type: INCREMENT});
    }

    const downClickHandler = e => {
        dispatch({type: DECREMENT});
    }

    const ChangeHandler = e => {
        dispatch({type: RENAME, name: e.target.value });
    }

    return(
        <div>
            <button onClick={ upClickHandler }>증가</button>
            <button onClick={ downClickHandler }>감소</button>
            <input type="text" value={state.name} onChange={ ChangeHandler } />
            <p>나이: { state.age }</p>
            <p>이름: { state.name }</p>
        </div>
    )
}

export default Test; 
