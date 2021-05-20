
### @ state , @useState

**CLASS** : 
```
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
``` 
변경할 경우
    this.setState({
        age : 25,
        name : 'jdj'
    });
```
**HOOKS** :
```
    const [ age, setAge ] = useState(20);
    const [ name, setName ] = useState('dj');
```
```
변경할 경우
    setAge(25);
    setName('jdj');
```
<br />

***

### @render
**CLASS** :
```
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
```
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
```
    componentDidMount() {   
        ...
    }
```
**HOOKS** :
```
    useEffect(() => {
        ...
    }, [] );  // 반드시 빈 배열을 넣어야 componentDidMount 유사 역할
```