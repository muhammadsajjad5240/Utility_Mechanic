import React, { Component } from 'react';
import './dashboardHome.css';
import { CardDeck, Card, } from 'react-bootstrap';
import OrderGraph from '../graphs/summary';
class DashboardHome extends Component {
  render() {
    return (
      <div id='adminHome'>
        <br /><h1>Brief Summary of Utility Mechanic</h1> <br />
        <CardDeck>
          <Card>
            <div>
              <i class="fa fa-eye fa-5x visit-icon dashboard-icon-div"></i><br />
              <h4>20</h4>
              <h6>Daily Visits</h6></div>
          </Card>
          <Card>
            <div>
              <i class="fas fa-wrench mechanic-icon dashboard-icon-div"></i><br />
              <h4>20</h4>
              <h6>Mechanics</h6></div>
          </Card>
          <Card >
            <div>
              <i class="fab fa-servicestack servies-icon dashboard-icon-div"></i><br />
              <h4>20</h4>
              <h6>Services</h6></div>
          </Card>
          <Card>
            <div>
              <i class="fa fa fa-comments comments-icon dashboard-icon-div"></i><br />
              <h4>20</h4>
              <h6>Comments</h6></div>
          </Card>
        </CardDeck><br />
        {/* <ServiceGraph /> */}
        <OrderGraph />
        {/* <MechanicGraph /> */}
      </div>
    );
  }
}
export default DashboardHome;