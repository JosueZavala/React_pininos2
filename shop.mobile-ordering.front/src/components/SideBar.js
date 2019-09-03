import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/SideBar.css';
import SideBarElement from '../components/SideBarElement';

class SideBar extends React.Component{

  render() {

    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Shop Mobile</div>
            <div className="sidebar">
              <ul className="nav">
                <SideBarElement
                  iconAwesome="fa fa-file-text"
                  title="Generate Catalog"
                />
                <SideBarElement
                  iconAwesome="fa fa-server"
                  title="Warehoses info"
                />
                <SideBarElement
                  iconAwesome="fa fa-money"
                  title="Payment Restrictions"
                />
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default SideBar
