import React, { Component } from 'react';

import Navbar from './assets/components/Navbar';
import Card from './assets/components/Card';
import Container from './assets/components/Container';

class Daili extends Component {
  render() {
    const fakeData = [
      {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', id: Date.now() + 0},
      {text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', id: Date.now() + 1},
      {text: 'ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', id: Date.now() + 2}
    ]

    const fakeData2 = [
      {text: 'Lorem ispum', id: Date.now() + 5},
      {text: 'quis nostrud exercitation ullamco laboris nisi ut aliquip', id: Date.now() + 3},
      {text: 'reprehenderit in voluptate velit esse', id: Date.now() + 4}
    ]

    return (
      <div>
        <Navbar />
        <Container>
          <Card date="Feb 23, 2017" open />
          <Card date="Feb 22, 2017" items={fakeData} />
          <Card date="Feb 21, 2017" items={fakeData2} />

        </Container>
      </div>
    );
  }
}

export default Daili;
