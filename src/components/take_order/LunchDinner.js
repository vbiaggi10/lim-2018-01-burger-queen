import React, { Component } from 'react';
import { Button, Collapsible, CollapsibleItem, Input } from 'react-materialize';
import data from '../../data/menu.json';

class LunchDinner extends Component {
  constructor() {
    super();
    this.state = {
      tempHamburgerName: '',
      tempHamburgerPrice: ''
    }
  }
  render() {
    return (
      <div className="row">
        <Collapsible popout accordion>
          <CollapsibleItem header='Hamburguesas'>
            <div>{this.handleShowHamburguer()}</div>
            <div className='hamburger-type'>
              <Input onChange={this.handleInputChange.bind(this)} checked={this.state.withSome} type='checkbox' value='red' name='Queso/1' price='1' label='Queso + S/.1' />
              <Input onChange={this.handleInputChange.bind(this)} checked={this.state.withSome} type='checkbox' value='red' name='Huevo/1' price='1' label='Huevo + S/.1' />
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
          <div className="col s6"  key={`h${i}`}>
            <Input onChange={this.handleTypeHamburger.bind(this)} s={12} type='select' label={`Seleccione el tipo de ${items.name} S/ ${items.price}`} defaultValue='disabled' name={`${items.name}/${items.price}`}>
              <option value='disabled' disabled>Tipo</option>
              <option value='res'>Res</option>
              <option value='pollo'>Pollo</option>
              <option value='vegetariana'>Vegetariana</option>
            </Input>
          </div>
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
    e.target.style.background = '#7e7e7e';
    const newTarget = e.target.name.split('/');
    this.setState({ tempHamburgerName: newTarget[0], tempHamburgerPrice: newTarget[1] })
  }

  handleTypeHamburger(e) {
    e.preventDefault();
    const newTarget = e.target.name.split('/');
    const name = newTarget[0] + ' ' + e.target.value;
    localStorage.setItem('tempHamburgerName', name)
    // localStorage.setItem('tempHamburgerPrice', newTarget[1])
    this.props.takingOrder(name, newTarget[1])
  }

  handleInputChange(e) {
    e.preventDefault();
    const target = e.target;
    const newTarget = e.target.name.split('/');
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = localStorage.getItem('tempHamburgerName') + ' + ' +newTarget[0];
    // const price = parseInt(newTarget[1]);
    
    if (value) {
      this.props.takingOrder(name, newTarget[1])
    }
  }

  handleOrder(e) {
    e.preventDefault();
    const newTarget = e.target.name.split('/');
    this.props.takingOrder(newTarget[0], newTarget[1])
  }
}

export default LunchDinner;
