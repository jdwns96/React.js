# 리액트 기초 

1. 리엑트는 내부적으로 돔을 형성한 돔 객체가 아니라 돔의 구조 정보를 가지고있는 객체, 즉 자바스크립트 '객체' 이다. <br/>
2. 그리고 reactDOM.render() 를 만나면 해당 객체가 이제서야 DOM 객체로 변환이 된다. <br/>
3. class 는 className 으로 치환하고 예약어와 겹치는 for 는 htmlFor 로 사용한다. <br/>
4. 이벤트 핸들링이나 대부분의 요소는 카멜표기법으로 한다.  ex) onclick => onClick. <br/>
5. 주석은 {/* 주석 */} 으로 표기한다. <br/>
6. HTML 의 커스텀 태그는 '<my-tag>' 표기였으나 React 는 '<MyTag>' 형태로표현한다. <br/>
7. JSX 내부에 js 를 사용하려면 {  } 을 열고 사용한다. <br/>

**React.createElement( 노드이름 , { props }, 자식요소)**
```javascript

const elem = <h1> Hello react !! </h1> ;

React.createElement('h1', null, 'Hello react !! ');

```

하단의 표기법이 기본의 리엑트 표기법이며 상단의 표기법은 JSX 문법으로 Babel 의 해석을 통해 기본 리엑트 엘레먼트로 변환이 된다.

****

**ReactDOM.render(element, HTMLElement)**
```javascript

ReactDOM.render(
    <div> hello react </div>
    , document.querySelector('#root')
);

```
