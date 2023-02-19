import "./card.css"

const Card = ({monster})=>{
  const {name, email, id} = monster
  return (
    <div className="card-container" key={id}>
    <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
  )
}

export default Card








// import { Component } from 'react'
// import './card.css'

// class Card extends Component{
//     render(){
//       const {monster} = this.props
//       const {name, email, id} = monster
//         return(
//             <div className="card-container" key={id}>
//             <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//             <h2>{name}</h2>
//             <p>{email}</p>
//           </div>
//         )}}

// export default Card