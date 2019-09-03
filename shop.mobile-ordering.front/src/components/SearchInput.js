import React from 'react';
import LocaleCard from './LocaleCard';
import '../Styles/SearchImput.css';

class SearchInput extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      inputValue: ''
    }

      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);

      this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'LoginInput');
      this.handlePwdKeyUp = this.keyUpHandler.bind(this, 'PwdInput');


  }

  keyUpHandler(refName, e) {
        console.log(refName.props.value);
        // prints either LoginInput or PwdInput
    }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
     document.addEventListener('click', this.closeMenu);
   });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

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
                <button onClick={this.showMenu} className="dropbtn">Find Locale...</button>

                    {
                  this.state.showMenu
                    ? (
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
                    )
                    : (
                      null
                    )
                }

              </div>
          </header>


        </div>

      );
    }
}

export default SearchInput;
