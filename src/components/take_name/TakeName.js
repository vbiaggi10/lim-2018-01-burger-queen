import React, { Component } from 'react';
import TakeOrder from '../take_order/TakeOrder';
import { Container, Input, Icon } from 'react-materialize';

class TakeName extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tookName: false
    }
  }

  render() {
    if (this.state.tookName) {
      return (
        <div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleCancel.bind(this)}>Cancel
              <Icon small right>close</Icon>
          </button>
          <TakeOrder name={this.state.name} />
        </div>
      )
    } else {
      return (
        <Container className="row">
          <form className="col s6" onSubmit={this.handleSubmit.bind(this)}>
            <Input s={12} onChange={this.handleChange.bind(this)} label="Name" />
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <Icon small right>send</Icon>
            </button>
          </form>
        </Container>
      );
    }
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.name){
      this.setState({ tookName: true })
    }
  }

  handleCancel(e) {
    this.setState({ tookName: false })
  }

}

export default TakeName;
