import React, { Component } from 'react';
import {Col, Card, Table} from 'react-materialize';

class ViewOrders extends Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0
    }
  }

  componentWillMount() {
    let acum = 0;
    this.props.order.forEach( order => {
      const parsePrice = parseInt(order.orderPrice);
      acum = acum + parsePrice;
      return acum;
    })
    this.setState({totalPrice: acum})
  }

  render() {
    return (
      <Col m={6} s={12}>
        <Card title={`Orden de ${this.props.name}`} actions={[ this.props.status ? null : (<a href=' ' onClick={this.handleChangeStatus.bind(this)}>Terminar</a>)]}>
          <p className="grey-text text-lighten-1">{this.props.id}</p>
          <p>{this.props.hour} {this.props.date}</p>
          <Table>
            <thead>
              <tr>
                <th data-field="id">Order</th>
                <th data-field="name">Price</th>
              </tr>
            </thead>
            <tbody>
              {this.props.order ? (this.props.order.map((order, i) => {
                return(
                  <tr key={`ordernameprice-${i}`}>
                    <td>{order.orderName}</td>
                    <td>S/ {order.orderPrice}</td>
                  </tr>
                )
              })) : null
            }
            </tbody>
          </Table>
          <p>Total: S/ {this.state.totalPrice}</p>
        </Card>
      </Col>
    );
  }

  handleChangeStatus() {
    this.props.handleChangeStatus(this.props.id, this.props.status)
  }
}

export default ViewOrders;
