import React from 'react';

class WHTuple extends React.Component{
  constructor(props){
    super(props);
  }

  render() {

    return (
        <tr>
          <td>{this.props.dataObject.Code}</td>
          <td>{this.props.dataObject.Name}</td>
          <td>{this.props.dataObject.isIkiosk}</td>
          <td>{this.props.dataObject.isIkiosk}</td>
          <td className="text-center"><div className="btn btn-primary btn-sm"><i className="fa fa-pencil-square"></i></div></td>
          {/*<td className="text-center"><div className="btn btn-primary btn-sm" onClick={handleShow}><i className="fa fa-pencil-square"></i></div></td>*/}
        </tr>
    );
  }
}

export default WHTuple
