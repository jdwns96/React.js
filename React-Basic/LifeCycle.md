**constructor**
```javascript
    constructor(props) {
        super(props);
    }
```
이 부분은 컴포넌트 '생성자 함수' 입니다. 가장 먼저 실행되는 함수로 초기 state를 설정합니다.
<br/>

**conponentWillMount** (deprecated) <br/>
render 가 발생하기전 호출되는 API, 이후 componentDidMount 가 처리
<br/>

**render** <br/>
렌더링 실행, 화면에 요소를 그려준다.
<br/>

**componentDidMount** 
```javascript
    componentDidMount() {
        // 외부 라이브러리 연동: D3, masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
        // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    }
```
componentDidMount는 컴포넌트가 화면에 나타나게 됐을 때 호출 되며 , 즉 render 후에 호출이 됩니다.
보통 컴포넌트에서 fetch,axios등을 통해 데이터를 받아오는데 사용 합니다.
최초 실행기
<br/>

