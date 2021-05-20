
### @ state , useState

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

### 


