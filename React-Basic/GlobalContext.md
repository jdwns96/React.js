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


### components/
```javascript
  
```
