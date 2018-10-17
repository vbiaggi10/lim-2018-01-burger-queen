import React, { Component } from 'react';
import TakeOrder from '../take_order/TakeOrder';
import { Input, Icon, Row } from 'react-materialize';

class TakeName extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tookName: false,
      userId: ''
    }
  }

  render() {
    if (this.state.tookName) {
      return (
        <div>
          <TakeOrder name={this.state.name} handleChangeStatus={this.handleChangeStatus.bind(this)}  handleCancel={this.handleCancel.bind(this)} userId={this.state.userId}/>
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
      this.setInDataBase(this.state.name);
      this.setState({ tookName: true })
    }
  }

  handleCancel(newState) {
    this.setState({ tookName: newState })
  }

  handleChangeStatus(newState) {
    this.setState({ tookName: newState })    
  }

  setInDataBase(name) {
    const db = window.firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    }); 
    db.collection("clients").add({
      name: name
    })
    .then((docRef) => {
      // console.log("Document written with ID: ", docRef.id);
      this.setState({userId: docRef.id})
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }
}

export default TakeName;
