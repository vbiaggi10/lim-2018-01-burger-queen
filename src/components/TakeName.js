import React, { Component } from 'react';

class TakeName extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }

    this.takeName = React.createRef();
  }

  render() {
    return (
      <div className="row">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s12">
              <input ref={this.takeName} type="text" className="validate" />
              <label>Name</label>
            </div>
            {/* <div className="input-field col s12">
              <input type="text" className="validate" />
              <label>Last Name</label>
            </div> */}
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit()}>Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }

  handleSubmit() {
    // this.takeName
  }

}

export default TakeName;
