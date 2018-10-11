import React, { Component } from 'react';
import { Button, Collapsible, CollapsibleItem } from 'react-materialize';
import data from '../../data/menu.json';

class Breakfast extends Component {
  render() {
    return (
      <div className="row">
        <Collapsible popout>
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
        if(header === 'Sandwiches'){
          if(item.name.substr(0, 4) === 'Sand'){
            return (
              <Button key={i} waves='light' name={item.name} price={item.price}>{item.name}  S/.{item.price}</Button>
            )
          }
        }else{
          if(item.name.substr(0, 4) === 'Café' || item.name.substr(0, 4) === 'Jugo'){
            return (
              <Button key={i} waves='light' name={item.name} price={item.price}>{item.name}  S/.{item.price}</Button>
            )
          }
        }
      })
    })
  }
}

export default Breakfast;
