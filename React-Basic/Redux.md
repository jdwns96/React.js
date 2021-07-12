**modules/counter.js**

```javascript
/**
 * 액션 타입 정의
 * Ducks 패턴을 사용 할 땐 위와 같이 액션 이름을 지을 때 문자열의 앞부분에 모듈 이름을 넣습니다.
 *  이는, 다른 모듈에서 작성하게 될 수도 있는 액션들과 충돌되지 않게 하기 위함입니다.
 * */
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

/**
 * 액션 생성함수를 정의할땐 위와 같이 꼭 앞에 export 를 붙여주세요.
 * 여기서 만든 함수들은 나중에 우리가 컴포넌트에 리덕스를 연동하고 불러와서 사용하게 됩니다.
 */
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initialState = {
  number: 0,
};

// **** 리듀서 작성
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default reducer;
```

**modules/index.js**

```javascript
import { combineReducers } from "redux";
import counter from "./counter";

export default combineReducers({
  counter,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
```

**index.js**

```javascript
import React from "react";
import { createStore } from "redux";
import rootReducer from "./modules";

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>...</React.StrictMode>,
  document.getElementById("root")
);
```
