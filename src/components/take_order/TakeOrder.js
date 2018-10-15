import React, { Component } from 'react';
import {Tabs, Tab, Container, Button} from 'react-materialize';
import Breakfast from './Breakfast';
import LunchDinner from './LunchDinner';

class TakeOrder extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      totalOrders: []
    }
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div className="row">
        <h2>Pedido de {this.props.name}</h2>
        <Container className="col s8">
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Breakfast" className="col s6" active> <Breakfast takingOrder={this.takingOrder.bind(this)}/> </Tab>
            <Tab title="Lunch / Dinner" className="col s6"> <LunchDinner takingOrder={this.takingOrder.bind(this)}/> </Tab>
          </Tabs>
        </Container>
        <Container className="col s4">
          <h4>Pedido</h4>
          <div>{this.showOrder()}</div>
          <div>{this.totalPrice()}</div>
          <Button onClick={this.handleChangeStatus.bind(this)} waves='light'>Enviar a cocina</Button>
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
    this.setState({orders: orders})
  }

  totalPrice() {
    let acum = 0;
    let printTotalPrice = '';
    if(this.state.orders !== []){
      this.state.orders.map( (order, i) => {
        const parsePrice = parseInt(order.orderPrice);
        acum = acum + parsePrice;
        printTotalPrice = '';
        return acum;
      })
      return(printTotalPrice = <p className='total-price'>Total: S/ {acum}</p>);
    } 
  } 

  deleteOrder(e) {
    const target = e.target;
    const orders= this.state.orders;    
    delete orders[target.id];
    this.setState({orders: orders});
  }
  
  handleChangeStatus() {
    this.props.handleChangeStatus(false)
  }
}

export default TakeOrder;
