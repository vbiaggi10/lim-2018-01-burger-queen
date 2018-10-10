import React, { Component } from 'react';
import TakeOrder from '../take_order/TakeOrder';
import {Input, Icon} from 'react-materialize';

class TakeName extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tookName: false
    }
  }

  render() {
    if(this.state.tookName){
      return ( <TakeOrder name={this.state.name}/>)
    }else {
      return (
        <div className="row">
          <form className="col s6" onSubmit={this.handleSubmit.bind(this)}>
            <Input s={12} onChange={this.handleChange.bind(this)} label="Name" />
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <Icon small right>send</Icon>
            </button>
          </form>
        </div>
      );
    } 
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({tookName: true})
    // this.setState({name: ''})
  }

}

export default TakeName;
