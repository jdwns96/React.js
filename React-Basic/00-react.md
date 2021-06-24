# 리액트 기초 

1. 리엑트는 내부적으로 돔을 형성한 돔 객체가 아니라 돔의 구조 정보를 가지고있는 객체, 즉 자바스크립트 '객체' 이다. <br/>
2. 그리고 reactDOM.render() 를 만나면 해당 객체가 이제서야 DOM 객체로 변환이 된다. <br/>

**React.createElement( 노드이름, { 프롭스 }, 자식요소)**
```javascript

const elem = <h1> Hello react !! </h1> 

React.createElement('h1', null, 'Hello react !! ');

```
