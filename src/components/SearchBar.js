import React from 'react';
import logo from './logo.png';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  }

  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();

  }

  render() {
    return (
      <div className="searchBar">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="onSubmit" >
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange}></input>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar;