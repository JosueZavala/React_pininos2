import React from 'react';
import ReactDOM from 'react-dom';
import WareHosuesTable  from '../components/WareHosuesTable';


class WareHosuesInfo extends React.Component{

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="title-Module">
            Warehosues Info
          </div>
        </div>
        <div className="row">
          <WareHosuesTable />
        </div>
      </div>
    );
  }
}

export default WareHosuesInfo
