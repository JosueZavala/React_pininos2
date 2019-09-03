import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/LocaleCard.css';

class LocaleCard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <div className="Locale-container">
        <div className="Title-Locale">
          {this.props.country}
        </div>
        <div className="SubTitle-Locale">
          {this.props.locale}
        </div>
        <div className="Button-container">
          <button
            type="button"
            className="btn btn-success action-button">Catalog</button>
          <button type="button" className="btn btn-success">Image</button>
        </div>
      </div>
    );
  }
}

  export default LocaleCard
