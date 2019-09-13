import React from 'react';
import WHTable  from '../components/WHTable';
import SearchInput from '../components/SearchInput';


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
            <div className="container">
              <div className="col-sm dropDown-container">
                <SearchInput
                  FunctionOnChange = {(a) => console.log(a)}
                />
              </div>
              <WHTable />
            </div>
        </div>
      </div>
    );
  }
}

export default WareHosuesInfo
