import React, { Component } from 'react';

import Navbar from './assets/components/Navbar';
import Card from './assets/components/Card';
import Container from './assets/components/Container';

class Daili extends Component {
  render() {
    const fakeData = [
      {text: 'Item 1', id: Date.now() + 0},
      {text: 'Item 2', id: Date.now() + 1},
      {text: 'Item 3', id: Date.now() + 2}
    ]

    return (
      <div>
        <Navbar />
        <Container>
          <Card date="Feb 23, 2017" open />
          <Card date="Feb 22, 2017" items={fakeData} />
          <Card date="Feb 21, 2017" items={fakeData} />
        </Container>
      </div>
    );
  }
}

export default Daili;
