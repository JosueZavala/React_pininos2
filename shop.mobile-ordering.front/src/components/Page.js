import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../components/SideBar';
import Frame  from '../components/Frame';
import '../Styles/Page.css';


class Page extends React.Component{

  render() {
    return (
    <div className="row principal-row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          <div  className="row">
            <div className="col-6">
              <Frame />
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Page
