import React, { Component } from 'react';
import { Button, Collapsible, CollapsibleItem, Input } from 'react-materialize';
import data from '../../data/menu.json';

class LunchDinner extends Component {
  render() {
    return (
      <div className="row">
        <Collapsible popout>
          <CollapsibleItem header='Hamburguesas'>
            <div>{this.handleShowHamburguer()}</div>
            <div>
              <Button waves='light'>Res</Button>
              <Button waves='light'>Pollo</Button>
              <Button waves='light'>Vegetariana</Button>
            </div>
            <div>
              <Input name='group1' type='checkbox' value='red' label='Queso + S/.1' />
              <Input name='group1' type='checkbox' value='red' label='Huevo + S/.1' />
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
          <Button key={`h${i}`} waves='light' name={items.name} price={items.price}>{items.name}  S/.{items.price}</Button>
        )
      })
    })
  }

  handleShowDrinks() {
    return data.map((lunchdinner) => {
      return lunchdinner.lunchdinner.bebidas.map((items, i) => {
        return (
          <Button key={`b${i}`} waves='light' name={items.name} price={items.price} price={items.price}>{items.name} S/.{items.price}</Button>
        )
      })
    })
  }

  handleShowAccompaniments() {
    return data.map((lunchdinner) => {
      return lunchdinner.lunchdinner.acompañamientos.map((items, i) => {
        return (
          <Button key={`a${i}`} waves='light' name={items.name} price={items.price}>{items.name} S/.{items.price}</Button>
        )
      })
    })
  }
}

export default LunchDinner;
