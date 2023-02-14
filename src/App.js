import { Component } from 'react';
import './App.css';
import CardList from "./component/card-list/CardList"
import SearchBox from './component/search-box/searchBox';

class App extends Component{

  constructor(){
  super();

    this.state = {
      monsters:[],
    };
  }

  componentDidMount(){
    console.log("3");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users) => {
      this.setState(
         { monsters : users }
        ,
        ()=>{
          console.log(this.state);
        }
      )
    })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(()=>{
      return { searchField }
    })
  }
  
  render(){
    const { monsters,searchField } = this.state
    const { onSearchChange } = this
    
    const filterMonster = searchField ? monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    }):monsters
    
  return(
  <div className = 'App'>
  <h1 className='app-title'>The Room of Monsters</h1>
    <SearchBox onChangeHandler={onSearchChange} className='search-box-monsters' placeholder='Search monsters'/>
    <CardList monsters={filterMonster} />
  </div>
    );
  }
}

export default App;