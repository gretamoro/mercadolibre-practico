import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      valorInput: '',
    }
  }

  handleChange(e){
    const value = e.target.value;
    this.setState({
      valorInput: value
    })
  }

  render(){
    const url = '/items?search=' + this.state.valorInput
    return(
      <div>
        <input onChange={this.handleChange.bind(this)} type="text" value={this.state.valorInput}/>
        <Link to={url}>
          <button type="button">Buscar</button>
        </Link>
      </div>
    )
  }
}

export default Search;