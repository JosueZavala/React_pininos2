import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/SideBarElement.css';

class SideBarElement extends React.Component{
constructor(props){
  super(props);
  this.state = {
    iconAwesome: props.iconAwesome,
    title: props.title,
  }
}

  render() {

    return (
      <li>
      <i className={this.state.iconAwesome}></i>
        <p>{this.state.title}</p>
      </li>
    );
  }
}

export default SideBarElement
