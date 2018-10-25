import React, { Component } from 'react';

class ViewOrders extends Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0
    }
  }

  componentWillMount() {
    let acum = 0;
    this.props.order.forEach(order => {
      const parsePrice = parseInt(order.orderPrice);
      acum = acum + parsePrice;
      return acum;
    })
    this.setState({ totalPrice: acum })
  }

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td><p>{this.props.hour}</p><p>{this.props.date}</p></td>
        <td>{this.props.name}</td>
        <td>
          {this.props.order.map((order, i) => {
            return (<p key={`name-${i}`}>{order.orderName}</p>)
          })}
        </td>
        <td>
          {this.props.order.map((order, i) => {
            return (<p key={`price-${i}`}>S/ {order.orderPrice}</p>)
          })}
        </td>
        <td>S/ {this.state.totalPrice}</td>
      </tr>
    );
  }
}

export default ViewOrders;
