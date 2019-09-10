import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from '../components/SideBar';
import Frame  from '../components/Frame';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../Styles/App.css';


class App extends React.Component{

  render() {
    return (
      <BrowserRouter>
        <div className="row principal-row">
            <div className="col-3">
              <SideBar />
            </div>
            <div className="col-9">
              <div  className="row">
                <div className="col-6">
                  <Switch>
                    <Route exact path='/' component={Frame} />
                  </Switch>
                </div>
              </div>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
