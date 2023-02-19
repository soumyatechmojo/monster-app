import Card from "../card/card.component.jsx"
import "./cardList.css"

const CardList = ({monsters})=>{
  return(
    <div className="card-list">
      {monsters.map((monster)=>{
        return <Card monster = {monster}/>
      })}
    </div>
  )
}

export default CardList





// import { Component } from "react";
// import Card from "../card/card.component";
// import './cardList.css'

// class CardList extends Component{
//   render(){
//     const {monsters} = this.props
//     return (
//       <div className="card-list" key={monsters.id}>
//         {monsters.map((monster)=>{
//           return <Card monster={monster} />
//         })}
//       </div>
//       )
//     }
//   }

// export default CardList