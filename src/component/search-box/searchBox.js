import './searchBox.css'

const SearchBox = ({classname,placeholder,onChangeHandler})=>(
    <input 
        className={`search-box ${classname}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)

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