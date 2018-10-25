import React, { Component } from 'react';
import { Tabs, Tab, Container, Button, Icon } from 'react-materialize';
import Breakfast from './Breakfast';
import LunchDinner from './LunchDinner';

class TakeOrder extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      totalOrders: [],
      newOrders: [],
      tabBreakfast: true,
      tabLunch: false,
      collapsibleB: '',
      collapsibleLD: '',
    }
  }

  render() {
    return (
      <div className="row">
        <div className="container-nav">
          <h5>Pedido de {this.props.name}</h5>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleCancel.bind(this)}>Cancelar
            <Icon small right>close</Icon>
          </button>
        </div>
        <Container className="col s8">
          <Tabs className='tab-demo z-depth-1' onChange={this.handleTabChange.bind(this)}>
            <Tab title="Breakfast" className="col s6" active={this.state.tabBreakfast}> <Breakfast takingOrder={this.takingOrder.bind(this)} collapsibleB={this.state.collapsibleB} handleCollapsibleClickB={this.handleCollapsibleClickB.bind(this)}/> </Tab>
            <Tab title="Lunch / Dinner" className="col s6" active={this.state.tabLunch}> <LunchDinner takingOrder={this.takingOrder.bind(this)} collapsibleLD={this.state.collapsibleLD} handleCollapsibleClickLD={this.handleCollapsibleClickLD.bind(this)}/> </Tab>
          </Tabs>
        </Container>
        <Container className="col s4">
          <h5>Pedido</h5>
          <div>{this.showOrder()}</div>
          <div>{this.totalPrice()}</div>
          <Button onClick={this.handleChangeStatus.bind(this)} waves='light'>Enviar a cocina</Button>
        </Container>
      </div>
    );
  }

  showOrder() {
    if (this.state.orders !== []) {
      return this.state.orders.map((order, i) => {
        return (
          <div key={`show${i}`}>
            <span>{order.orderName} S/ {order.orderPrice}</span>
            <button className='btn-delete' onClick={this.deleteOrder.bind(this)} name={order.orderName} id={i}>🗑️</button>
          </div>
        )
      })
    }
  }

  takingOrder(name, price) {
    const { orders } = this.state;
    orders.push({
      orderName: name,
      orderPrice: price
    });
    this.setState({ orders: orders })
  }

  totalPrice() {
    let acum = 0;
    if (this.state.orders !== []) {
      this.state.orders.map((order, i) => {
        const parsePrice = parseInt(order.orderPrice);
        acum = acum + parsePrice;
        return acum;
      })
      return (<p className='total-price'>Total: S/ {acum}</p>);
    }
  }

  deleteOrder(e) {
    const target = e.target;
    const orders = this.state.orders;
    const newOrders = [];
    delete orders[target.id];
    orders.map(order => {
      newOrders.push({
        orderName: order.orderName,
        orderPrice: order.orderPrice
      });
      return order;
    })
    this.setState({ orders: newOrders });
  }

  handleChangeStatus() {
    if (this.state.orders !== []) {
      this.saveLocal();
    }
    this.props.handleChangeStatus(false);
  }

  handleCancel() {
    this.props.handleCancel(false)
  }

  saveLocal() {
    this.props.saveLocal(this.state.orders);
  }

  handleTabChange(e) {
    const sliceEvent = e.slice(-1)
    if(sliceEvent === '0'){
      this.setState({tabBreakfast: true, tabLunch: false})
    }else {
      this.setState({tabBreakfast: false, tabLunch: true})
    }
  }

  handleCollapsibleClickB(value){
    if(value === "Sandwiches"){
      this.setState({collapsibleB: 0})
    }else if(value === "Bebidas") {
      this.setState({collapsibleB: 1})
    }
  }

  handleCollapsibleClickLD(value){
    if(value === "Hamburguesas"){
      this.setState({collapsibleLD: 0})
    }else if(value === "Acompañamientos") {
      this.setState({collapsibleLD: 1})
    } else if(value === "Bebidas"){
      this.setState({collapsibleLD: 2})
    }
  }
}

export default TakeOrder;
