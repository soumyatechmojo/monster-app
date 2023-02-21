import Card from '../card/Card.component'
import "./cardList.css"

const CardList = ({monsters})=>{
  return (
    <div className="card-List">
      {monsters.map((monster)=>{
        return <Card key={monster.id} monster={monster} />
      })}
    </div>
  )
}

export default CardList


/* --------------- Class Component ---------------------- */

// import { Component } from "react";
// import Card from "../card/card.component";
// import './cardList.css'

// class CardList extends Component{
//   render(){
//     const {monsters} = this.props
//     return (
//       <div className="card-list">
//         {monsters.map((monster)=>{
//           return <Card monster={monster} />
//         })}
//       </div>
//       )
//     }
//   }

// export default CardList