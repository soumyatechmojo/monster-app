import { useState, useEffect } from 'react';
import './App.css';
import CardList from "./component/card-list/CardList"
import SearchBox from './component/search-box/searchBox';

const App = ()=>{
    const [searchField,setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])
    const [filteredMonster, setFilteredMonsters] = useState(monsters)

    console.log('render');
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users) => {
      setMonsters(users)
    })
    },[])
    
    useEffect(()=>{
        const newFilterMonster = searchField ? monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchField)
        }):monsters
        setFilteredMonsters(newFilterMonster)
    
    
    },[monsters,searchField])
    
    
    const onSearchChange = (event)=>{
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
    }

    return(
    <div className = 'App'>
    <h1 className='app-title'>The Room of Monsters</h1>
    
    <SearchBox 
    onChangeHandler={onSearchChange} 
    className='search-box-monsters' 
    placeholder='Search monsters'
    />

    <CardList
    monsters={filteredMonster} 
    />

    </div>
    );
}

// class App extends Component{

//   constructor(){
//   super();

//     this.state = {
//       monsters:[],
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>response.json())
//     .then((users) => {
//       this.setState(
//         () => {
//           return {monsters : users}
//         }
//       )
//     })
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(()=>{
//       return { searchField }
//     })
//   }
  
//   render(){
//     const { monsters,searchField } = this.state
//     const { onSearchChange } = this
    
//     const filterMonster = searchField ? monsters.filter((monster) =>{
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     }):monsters
    
//   return(
//   <div className = 'App'>
//   <h1 className='app-title'>The Room of Monsters</h1>
//     <SearchBox onChangeHandler={onSearchChange} className='search-box-monsters' placeholder='Search monsters'/>
//     <CardList monsters={filterMonster} />
//   </div>
//     );
//   }
// }

export default App;