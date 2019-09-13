import React from 'react';
import MyModal  from '../components/MyModal';

class WHTable extends React.Component{
  constructor(){
    super();

    this.state = {
      show : false,
      setShow: false,
    }

  }

  render() {
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Is Pickup Location?</th>
                <th>Is Ikisok?</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A9</td>
                <td>QRC Cordoba</td>
                <td>YES</td>
                <td>NO</td>
                <td className="text-center"><div className="btn btn-primary btn-sm" onClick={handleShow}><i className="fa fa-pencil-square"></i></div></td>
              </tr>
              <tr>
                <td>DUP-004-32</td>
                <td>Retira en Debenedetti (Persona)</td>
                <td>YES</td>
                <td>NO</td>
                <td className="text-center"><div className="btn btn-primary btn-sm" onClick={handleShow}><i className="fa fa-pencil-square"></i></div></td>
              </tr>
              <tr>
                <td>DUP-001-32</td>
                <td>Retira en Debenedetti (Comisionista)</td>
                <td>YES</td>
                <td>NO</td>
                <td className="text-center"><div className="btn btn-primary btn-sm" onClick={handleShow}><i className="fa fa-pencil-square"></i></div></td>
              </tr>
            </tbody>
          </table>
          <MyModal
            show={this.state.show}
            handleClose={handleClose}
          />
        </div>
    );
  }
}

export default WHTable
