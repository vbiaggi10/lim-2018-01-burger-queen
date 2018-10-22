import React, { Component } from 'react';
import ShowOrder from './ShowOrder';
import { Col } from 'react-materialize';

const db = window.firebase.firestore();

class ViewOrders extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    const { orders } = this.state;
    const today = new Date();
    const getDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    db.collection("clients").orderBy("timestamp", "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().date === getDate)
          orders.push({
            id: doc.id,
            date: doc.data().date,
            hour: doc.data().hour,
            name: doc.data().name,
            order: doc.data().order,
            status: doc.data().status
          });
        this.setState({ orders: orders })
      });
    });
  }

  render() {
    return (
      <div className="row">
        <Col m={6} s={12}>
          <h5>En proceso</h5>
          {this.state.orders.map((element, i) => {
            if (!element.status) return (<ShowOrder key={`false-${i}`} id={element.id} name={element.name} order={element.order} status={element.status} date={element.date} hour={element.hour} handleChangeStatus={this.handleChangeStatus.bind(this)} />)
          })}
        </Col>
        <Col m={6} s={12}>
          <h5>Terminado</h5>
          {this.state.orders.map((element, i) => {
            if (element.status) return (<ShowOrder key={`true-${i}`} id={element.id} name={element.name} order={element.order} status={element.status} date={element.date} hour={element.hour} handleChangeStatus={this.handleChangeStatus.bind(this)} />)
          })}
        </Col>
      </div>
    );
  }

  handleChangeStatus(id, status) {
    var washingtonRef = db.collection("clients").doc(id);
    let newStatus;
    status ? newStatus = false : newStatus = true;
    return washingtonRef.update({
      status: newStatus
    })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

}

export default ViewOrders;
