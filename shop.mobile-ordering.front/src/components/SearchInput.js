import React from 'react';
import '../Styles/SearchImput.css';

class SearchInput extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }

  }

  updateInputValue(evt) {
      const eventValue = evt.target.value;
      this.setState({
        inputValue: eventValue
      });
      this.props.FunctionOnChange(eventValue)
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
