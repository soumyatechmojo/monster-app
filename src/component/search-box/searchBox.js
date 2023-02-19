import "./searchBox.css"

const SearchBox = ({className,placeholder,onChangeHandler})=>{
    return (
        <input 
        className={`search-box ${className}`}
        placeholder={placeholder}
        type="search"
        onChange={onChangeHandler}
        />
    )
}

export default SearchBox





// import { Component } from 'react'
// import './searchBox.css'

// class SearchBox extends Component{
//     render(){
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type="search"
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         )
//     }
// }

// export default SearchBox