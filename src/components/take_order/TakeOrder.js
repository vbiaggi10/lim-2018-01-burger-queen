import React, { Component } from 'react';
import {Tabs, Tab, Container} from 'react-materialize';
import Breakfast from './Breakfast';
import LunchDinner from './LunchDinner';

class TakeOrder extends Component {
  render() {
    return (
      <div className="row">
        <h1>{this.props.name}'s order</h1>
        <Container className="col s6">
          <Tabs className='tab-demo z-depth-1'>
            <Tab title="Breakfast" className="col s6" active> <Breakfast/> </Tab>
            <Tab title="Lunch / Dinner" className="col s6"> <LunchDinner/> </Tab>
          </Tabs>
        </Container>
        
      </div>
    );
  }
}

export default TakeOrder;
