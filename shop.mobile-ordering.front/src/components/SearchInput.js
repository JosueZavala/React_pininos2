import React from 'react';
import LocaleCard from './LocaleCard';
import '../Styles/SearchImput.css';

class SearchInput extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      arrayCards: [],
      displayContainer: 'none'
    }

  }

  updateInputValue(evt) {
      const eventValue = evt.target.value;
      this.setState({
        inputValue: eventValue
      });
      this.searchLocale(eventValue)
    }

  searchLocale(value){

      if (value != '') {
        this.setState({
          arrayCards: this.props.FunctionOnChange(value),
          displayContainer: ''
        });
      }else {
        this.setState({
          arrayCards: [],
          displayContainer: 'none'
        });
      }

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

          <div
            className="row card-Locales-container"
            style={{
                  display: `${this.state.displayContainer}`
            }}
          >
                {this.state.arrayCards}
          </div>

        </div>

      );
    }
}

export default SearchInput;
