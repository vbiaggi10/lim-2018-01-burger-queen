import React, { Component } from 'react';
import TakeOrder from '../take_order/TakeOrder';
import { Input, Icon, Row } from 'react-materialize';

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
          <TakeOrder name={this.state.name} handleChangeStatus={this.handleChangeStatus.bind(this)}  handleCancel={this.handleCancel.bind(this)}/>
        </div>
      )
    } else {
      return (
        <Row className="viewport">
            <form className="col s12 form" onSubmit={this.handleSubmit.bind(this)}>
              <Input s={12} onChange={this.handleChange.bind(this)} label="Nombre" />
              <button className="btn waves-effect waves-light" type="submit" name="action">Enviar
                <Icon small right>send</Icon>
              </button>
            </form>
        </Row>
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

  handleCancel(newState) {
    this.setState({ tookName: newState })
  }

  handleChangeStatus(newState) {
    this.setState({ tookName: newState })    
  }

}

export default TakeName;
