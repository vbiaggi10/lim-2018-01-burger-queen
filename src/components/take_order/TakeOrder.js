import React, { Component } from 'react';
import {Tabs, Tab, Container, Icon} from 'react-materialize';
import Breakfast from './Breakfast';
import LunchDinner from './LunchDinner';

class TakeOrder extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
    this.myRef = React.createRef();
  }
  render() {
    const price = this.totalPrice();    
    const totalPrice = price[price.length - 1];
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
          <p className="total-price">Total: {totalPrice ? totalPrice : 0}</p>
        </Container>
      </div>
    );
  }

  showOrder() {
    if(this.state.orders !== []){
      return this.state.orders.map( (order, i) => {
        return (
          <div key={`show${i}`}>
            <span>{order.orderName} S/ {order.orderPrice}</span> 
            <a className='btn-delete' ref={this.myRef} name={order.orderName} onClick={this.deleteOrder.bind(this)}><Icon small>delete</Icon></a>
          </div>)
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

  deleteOrder(e) {
    const node = this.myRef.current;
    const orders = this.state.orders;
    orders.forEach(order => {
      if (order.orderName === node.name) {
        const indexUpdate = orders.indexOf(order)
        delete orders[indexUpdate];
      }
    })
    console.log(this.state.orders)
  }
  
}

export default TakeOrder;
