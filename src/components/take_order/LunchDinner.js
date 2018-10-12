import React, { Component } from 'react';
import { Button, Collapsible, CollapsibleItem, Input } from 'react-materialize';
import data from '../../data/menu.json';

class LunchDinner extends Component {
  constructor() {
    super();
    this.state = {
      tempHamburgerName: '',
      tempHamburgerPrice: '',
      withSome: false
    }
  }
  render() {
    return (
      <div className="row">
        <Collapsible popout>
          <CollapsibleItem header='Hamburguesas'>
            <div>{this.handleShowHamburguer()}</div>
            <div>
              <Button onClick={this.handleTypeHamburger.bind(this)} name='res' className='btn-hamburger' waves='light'>Res</Button>
              <Button onClick={this.handleTypeHamburger.bind(this)} name='pollo' className='btn-hamburger' waves='light'>Pollo</Button>
              <Button onClick={this.handleTypeHamburger.bind(this)} name='vegetariana' className='btn-hamburger' waves='light'>Vegetariana</Button>
            </div>
            <div className=''>
              <Input onChange={this.handleInputChange.bind(this)} checked={this.state.withSome} type='checkbox' value='red' name='Queso' price='1' label='Queso + S/.1' />
              <Input onChange={this.handleInputChange.bind(this)} checked={this.state.withSome} type='checkbox' value='red' name='Huevo' price='1' label='Huevo + S/.1' />
            </div>
          </CollapsibleItem>
          <CollapsibleItem header='Acompañamientos'>
            {this.handleShowAccompaniments()}
          </CollapsibleItem>
          <CollapsibleItem header='Bebidas'>
            {this.handleShowDrinks()}
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }

  handleShowHamburguer() {
    return data.map((lunchdinner) => {
      return lunchdinner.lunchdinner.hamburguesas.map((items, i) => {
        return (
          <Button onClick={this.handleHamburguer.bind(this)} className='btn-item' key={`h${i}`} waves='light' name={`${items.name}/${items.price}`}>{items.name}<br />S/ {items.price}</Button>
        )
      })
    })
  }

  handleShowDrinks() {
    return data.map((lunchdinner) => {
      return lunchdinner.lunchdinner.bebidas.map((items, i) => {
        return (
          <Button onClick={this.handleOrder.bind(this)} className='btn-item' key={`b${i}`} waves='light' name={`${items.name}/${items.price}`}>{items.name}<br />S/ {items.price}</Button>
        )
      })
    })
  }

  handleShowAccompaniments() {
    return data.map((lunchdinner) => {
      return lunchdinner.lunchdinner.acompañamientos.map((items, i) => {
        return (
          <Button onClick={this.handleOrder.bind(this)} className='btn-item' key={`a${i}`} waves='light' name={`${items.name}/${items.price}`}>{items.name}<br />S/ {items.price}</Button>
        )
      })
    })
  }

  handleHamburguer(e) {
    e.preventDefault();
    const newTarget = e.target.name.split('/');
    this.setState({ tempHamburgerName: newTarget[0], tempHamburgerPrice: newTarget[1] })
  }

  handleTypeHamburger(e) {
    e.preventDefault();
    const name = this.state.tempHamburgerName + ' ' + e.target.name;
    localStorage.setItem('tempHamburgerName', name)
    this.props.takingOrder(name, this.state.tempHamburgerPrice)
  }

  handleInputChange(e) {
    e.preventDefault();
    const target = e.target;
    console.log(localStorage.getItem('tempHamburgerName'))
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = localStorage.getItem('tempHamburgerName') + ' + ' +target.name;
    if (value) {
      this.props.takingOrder(name, 1)
    }
  }

  handleOrder(e) {
    e.preventDefault();
    const newTarget = e.target.name.split('/');
    this.props.takingOrder(newTarget[0], newTarget[1])
  }
}

export default LunchDinner;
