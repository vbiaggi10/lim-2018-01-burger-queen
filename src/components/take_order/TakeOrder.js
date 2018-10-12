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
    this.myRef = React.createRef();
  }
  render() {
    const price = this.totalPrice();    
    // const totalPrice = price[price.length - 1];
    console.log(price)
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
          {/* <p className="total-price">Total: S/ {totalPrice ? totalPrice : 0}</p> */}
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
            <button className='btn-delete' onClick={this.deleteOrder.bind(this)} name={order.orderName} id={i}>🗑️</button>
          </div>)
      })
    }
  }

  takingOrder(name, price) {
    const { orders } = this.state;
    orders.push({
      // orderId: '',
      orderName: name,
      orderPrice: price
    });
    // const newArray = orders.map((order, i) => {
    //   order.orderId = i;
    //   return order;
    // })
    // console.log(newArray)
    this.setState({orders})
  }

  totalPrice() {
    let acum = 0;
    if(this.state.orders !== []){
      return this.state.orders.forEach( order => {
        const parsePrice = parseInt(order.orderPrice);
        acum = acum + parsePrice;
        console.log(acum)
        return acum;
      })
      // return this.state.orders.map( (order) => {
      //   const parsePrice = parseInt(order.orderPrice);
      //   acum = acum + parsePrice;
      //   console.log(acum)
      //   return acum;
      // })
    }
  }

  deleteOrder(e) {
    const target = e.target;
    const orders = this.state.orders;
    delete orders[target.id];
    this.setState({orders});
  }
  
}

export default TakeOrder;
