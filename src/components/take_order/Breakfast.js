import React, { Component } from 'react';
import { Button, Collapsible, CollapsibleItem } from 'react-materialize';
import data from '../../data/menu.json';

class Breakfast extends Component {
  render() {
    return (
      <div className="row">
        <Collapsible popout accordion>
          <CollapsibleItem header="Sandwiches">
            {this.handleShowItems("Sandwiches")}
          </CollapsibleItem>
          <CollapsibleItem header="Bebidas">
            {this.handleShowItems("Bebidas")}
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }

  handleShowItems(header) {
    return data.map((breakfast) => {
      return (breakfast.breakfast).map((item, i) => {
        if (header === 'Sandwiches') {
          if (item.name.substr(0, 4) === 'Sand') {
            return (
              <Button onClick={this.handleOrder.bind(this)} className='btn-item' key={i} waves='light' name={`${item.name}/${item.price}`}>{item.name}<br />S/ {item.price}</Button>
            )
          }
        } else {
          if (item.name.substr(0, 4) === 'Café' || item.name.substr(0, 4) === 'Jugo') {
            return (
              <Button onClick={this.handleOrder.bind(this)} className='btn-item' key={i} waves='light' name={`${item.name}/${item.price}`}>{item.name}<br />S/ {item.price}</Button>
            )
          }
        }
      })
    })
  }

  handleOrder(e) {
    e.preventDefault();
    const newTarget = e.target.name.split('/');
    this.props.takingOrder(newTarget[0], newTarget[1])
  }
}

export default Breakfast;
