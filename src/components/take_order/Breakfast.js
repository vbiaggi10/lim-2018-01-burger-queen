import React, { Component } from 'react';
import { Button } from 'react-materialize';
import data from '../../data/menu.json';

class Breakfast extends Component {
  render() {
    return (
      <div className="row">
        <div>{this.handleShowItems()}</div>
      </div>
    );
  }

  handleShowItems() {
    return data.map((breakfast) => {
      return (breakfast.breakfast).map((item, i) => {
        return (
          <Button key={i} waves='light'>{item.name}</Button>
        )
      })
    })
  }
}

export default Breakfast;
