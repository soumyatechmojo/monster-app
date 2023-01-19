import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component{

  constructor(){
  super();

    this.state = {
      monsters:[],
    };
    console.log("1");
  }

  componentDidMount(){
    console.log("3");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users) => {
      this.setState(
        () => {
          return {monsters : users}
        }
      )
    })
  }
  
  
  render(){
    console.log("2");
    return(
    <div className = 'App'>
    <input 
    className='search-box' 
    type="search" 
    placeholder='Search Monsters'
    onChange={(e) =>{
      console.log(e.target.value);
      const toLowerCase = e.target.value.toLowerCase()
      const filterMonster = this.state.monsters.filter((monster) =>{
          return monster.name.toLowerCase().includes(toLowerCase)
      })

      this.setState(()=>{
        return {monsters : filterMonster}
      })
    }}
    />
      {this.state.monsters.map((monster)=>{
        return(
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      )
      })
    }
    </div>
    );
  }
}
export default App;