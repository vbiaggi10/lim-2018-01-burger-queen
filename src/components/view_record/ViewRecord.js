import React, { Component } from 'react';
import ShowRecord from './ShowRecord';
import { Table, Container } from 'react-materialize';

const db = window.firebase.firestore();

class TakeName extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    const { orders } = this.state;
    db.collection("clients").orderBy("timestamp", "desc").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
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
      <Container>
        <Table>
          <thead>
            <tr>
              <th data-field="id">Id</th>
              <th data-field="date">Date</th>
              <th data-field="name">Name</th>
              <th data-field="price">Order</th>
              <th data-field="price">Price</th>
              <th data-field="price">Total</th>
            </tr>
          </thead>

          <tbody>
            {this.state.orders.map((element, i) => {
              return (
                <ShowRecord key={`record-${i}`} id={element.id} name={element.name} order={element.order} status={element.status} date={element.date} hour={element.hour} />
              )
            })}
          </tbody>
        </Table>
      </Container>
    )
  }
}

export default TakeName;
