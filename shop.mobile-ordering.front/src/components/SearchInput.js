import React from 'react';
import LocaleCard from './LocaleCard';
import '../Styles/SearchImput.css';

class SearchInput extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }

  }

  updateInputValue(evt) {
      this.setState({
        inputValue: evt.target.value
      });
      console.log(this.state.inputValue);
    }

render (){
      return (
        <div className="App">
          <header className="App-header">
            <div className="dropdown">
                <button className="dropbtn">Find Locale...</button>
                <input
                   type="text"
                   placeholder="Search.."
                   id="myInput"
                   ref={(element) => {
                     this.dropdownMenu = element;
                   }}
                   value={this.state.inputValue}
                   onChange={evt => this.updateInputValue(evt)}
                 ></input>
              </div>
          </header>


        </div>

      );
    }
}

export default SearchInput;
