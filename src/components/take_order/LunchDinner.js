import React, { Component } from 'react';
import { Button, Collapsible, CollapsibleItem } from 'react-materialize';
import data from '../../data/menu.json';

class LunchDinner extends Component {
  render() {
    return (
      <div className="row">
        <Collapsible popout defaultActiveKey={1}>
          <CollapsibleItem header='Hamburguesas' icon='filter_drama'>
            <div>
              {/* <p>Hamburguesas</p> */}
              {this.handleShowHamburguer()}
            </div>
          </CollapsibleItem>
          <CollapsibleItem header='Acompañamientos' icon='place'>
            <div>
              {/* <p>Bebidas</p> */}
              {this.handleShowDrinks()}
            </div>
          </CollapsibleItem>
          <CollapsibleItem header='Bebidas' icon='whatshot'>
            <div>
              {/* <p>Acompañamientos</p> */}
              {this.handleShowAccompaniments()}
            </div>
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }

  handleShowHamburguer() {
    return data.map((lunchdinner) => {
      return lunchdinner.lunchdinner.hamburguesas.map((items, i) => {
        return (
          <Button key={`h${i}`} waves='light'>{items.name}</Button>
        )
      })
    })
  }

  handleShowDrinks() {
    return data.map((lunchdinner) => {
      return lunchdinner.lunchdinner.bebidas.map((items, i) => {
        return (
          <Button key={`b${i}`} waves='light'>{items.name} {items.length}</Button>
        )
      })
    })
  }

  handleShowAccompaniments() {
    return data.map((lunchdinner) => {
      return lunchdinner.lunchdinner.acompañamientos.map((items, i) => {
        return (
          <Button key={`a${i}`} waves='light'>{items.name}</Button>
        )
      })
    })
  }
}

export default LunchDinner;
