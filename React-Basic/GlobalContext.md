### App.js
```javascript
  import React from 'react';
  import Count from './components/Count';
  import Input from './components/Input';
  import store from './components/modules';
  import GlobalContext from './components/Context';

  function App() {

    return (
      <GlobalContext.Provider value={store}>
        <Count />
        <Input />
      </GlobalContext.Provider>
    );
  }

  export default App;
```

### components/Context/index.js
```javascript
  import React, { createContext } from 'react';

  const GlobalContext = createContext(null);

  export default GlobalContext;
```

### components/modules
##### store 
```javascript
  import * as count from './count';
  import * as input from './input';

  const store = {
      count, input
  }

  export default store;
```
##### count.jsx
```javascript
  // action types 
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';

  // action funcs 
  export const increase = () => ({type: INCREMENT});
  export const decrease = () => ({type: DECREMENT});


  // init state
  export const initialState = {
      num: 0
  };

  /*      reducer       */
  export const reducer = (state = initialState, action) => {
      switch(action.type){
          case INCREMENT:
              return {
                  ...state,
                  num: state.num + 1
              }
          case DECREMENT:
              return {
                  ...state,
                  num: state.num - 1
              }
          default: 
              return {...state}
      }
  }
```
##### input.jsx
```javascript
  // action types 
  const CHANGE = "CHANGE";

  // action funcs 
  export const change = (text) => ({type: CHANGE, text:text});

  // init state
  export const initialState = {
      text: ''
  }

  /*      reducer       */
  export const reducer = (state = initialState, action) => {
      switch(action.type){
          case CHANGE:
              return {
                  ...state,
                  text: action.text
              }
          default: 
              return {...state}
      }
  }
```


### components

##### Count.jsx
```javascript
  import React, {useContext, useReducer} from 'react';
  import GlobalContext from './Context';

  const Count = (props) => {

      const { count } = useContext(GlobalContext);
      const { reducer, initialState, increase, decrease } = count;

      const [state, dispatch] = useReducer(reducer, initialState);

      const plusHandler = e => {
          dispatch(increase());
      }
      const minHandler = e => {
          dispatch(decrease());
      }

      return(
          <>  
              <p>{state.num}</p>
              <button onClick={ plusHandler }> + </button>
              <button onClick={ minHandler }> - </button>
          </>
      );
  }

  export default Count;
```
##### Input.jsx
```javascript
  import React, { useContext, useReducer } from 'react';
  import GlobalContext from './Context'; 

  const Input = () => {

      const { input } = useContext(GlobalContext);
      const { reducer, initialState, change } = input ;

      const [state, dispatch] = useReducer(reducer, initialState);

      const changeHandler = e => {
          dispatch(change(e.target.value));
      }

      return (
          <>  
              <input type="text" value={state.text} onChange={changeHandler}/>
              <p>{state.text}</p>
          </>
      );
  }

  export default Input;
```
