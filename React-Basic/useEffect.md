

### @ state , @useState

**CLASS** : 
```javascript
    constructor(props){
        this.state = {
            age : 20,
            name : 'dj'
        }
    }

    state = {
        age : 20,
        name : 'dj'
    }
```
```javascript
변경할 경우
    this.setState({
        age : 25,
        name : 'jdj'
    });
```
**HOOKS** :
```javascript
    const [ age, setAge ] = useState(20);
    const [ name, setName ] = useState('dj');
```
```javascript
변경할 경우
    setAge(25);
    setName('jdj');
```
<br />

***

### @render
**CLASS** :
```javascript
    App class extends React.component{

        ...

        render(){
            return(
                <>
                    <div></div>
                </>
            )
        }
    }
``` 
**HOOKS** :
```javascript
    const App = () => {

        ...

        return(
            <>
                <div></div>
            </>
        )
    }
```
<br />

***

### @componentDidMount, @useEffect
```
    rendering 이후 한번만 실행되는 공간.
    이 자리에 보통 AJAX 통신을 해서 데이터를 가져온다.
```
**CLASS** :
```javascript
    componentDidMount() {   
        ...
    }
```
**HOOKS** :
```javascript
    useEffect(() => {
        ...
    }, [] );  // 반드시 빈 배열을 넣어야 componentDidMount 유사 역할
```
<br />

***

### @componentDidUpdate, @useEffect
```
    props나 state 가 변할때 동작하는 함수
    클래스는 if 를 통해 한번에 분기별 처리를 해주고 Hooks 에서는 각각 처리를 해준다.

    Hooks 에서 순수 componentDidUpdate 처럼 동작하려면 약간의 조작이 필요하다.
```
**CLASS** :
```javascript
    componentDidUpdate(prevProps, prevState) {  
        if(this.state.winBalls.length === 0){
            ...
        }else{
            ...
        }
    }
```
**HOOKS** :
```javascript
    const didUpdate = useRef(false);    // DidMount 행위를 막기 위한 조작

    useEffect(() => {
        if(!didUpdate.current){
            didUpdate.current = true;
        }else{
            ...
        }
    }, [ <변경값> ]); 
```
<br />

***

### @componentWillUnmount, @useEffect 
**CLASS** :
```javascript
    componentWillUnmount{

    }
```
**HOOKS** :
```javascript
    useEffect(() => {

        return () => {
            
        }
    })
```