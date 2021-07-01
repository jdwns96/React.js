#### 부모 컴포넌트
```javascript
  import React, { createContext, useReducer } from 'react'
import Ch from './Ch';

export const GlobalContext = createContext(null);

export const INCRE = 'INCRE';
export const DECRE = 'DECRE';

const defaultState = {
    age: 20,
    name: 'dj'
};

const reducer = (state, action) => {
    switch(action.type){
        case INCRE:
            return {
                ...state,
                age: state.age + 1
            }
        case DECRE:
            return {
                ...state,
                age: state.age - 1
            }
        default:
            return state;
    }
}

const Test = (props) => {

    const [state, dispatch] = useReducer(reducer, defaultState);
    
    // Provider 에서 value 로만 값을 전달해준다. 
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            <Ch />
        </GlobalContext.Provider>
    )
}

export default Test;
```

#### 자식 컴포넌트
```javascript
  import React, { useContext, useEffect } from 'react';
import { GlobalContext, INCRE, DECRE } from './Pa';

const Ch = () => {
    // 여기서 객체 하나 받아도 되고 바로 분해 할당으로 풀어도 되고 
    // const context = useContext(GlobalContext);
    const { state, dispatch } = useContext(GlobalContext); 

    useEffect(() => {
        console.log();
    }, [])

    const plusHandler = (e) => {
        dispatch({type: INCRE});
    }

    const minusHandler = (e) => {
        dispatch({type: DECRE});
    }


    return (
        <>
            {state.age}
            <button onClick={ plusHandler }>+</button>
            <button onClick={ minusHandler }>-</button>
        </>
    )
}

export default Ch;
```
