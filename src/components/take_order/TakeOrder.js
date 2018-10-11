import React, { Component } from 'react';
import {Tabs, Tab, Container} from 'react-materialize';
import Breakfast from './Breakfast';
import LunchDinner from './LunchDinner';

class TakeOrder extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }
  render() {
    console.log(this.totalPrice())
    return (
      <div className="row">
        <h1>{this.props.name}'s order</h1>
        <Container className="col s8">
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Breakfast" className="col s6" active> <Breakfast takingOrder={this.takingOrder.bind(this)}/> </Tab>
            <Tab title="Lunch / Dinner" className="col s6"> <LunchDinner takingOrder={this.takingOrder.bind(this)}/> </Tab>
          </Tabs>
        </Container>
        <Container className="col s4">
          <h3>Order</h3>
          {this.showOrder()}
        </Container>
      </div>
    );
  }

  showOrder() {
    if(this.state.orders !== []){
      return this.state.orders.map( (order, i) => {
        return (<p key={`show${i}`}>{order.orderName} S/ {order.orderPrice}</p>)
      })
    }
  }

  takingOrder(name, price) {
    const { orders } = this.state;
    orders.push({
      orderName: name,
      orderPrice: price
    });
    this.setState({orders})
  }

  totalPrice() {
    let acum = 0;
    if(this.state.orders !== []){
      return this.state.orders.map( (order) => {
        const parsePrice = parseInt(order.orderPrice);
        acum = acum + parsePrice;
        return acum;
      })
    }
  }
}

export default TakeOrder;
