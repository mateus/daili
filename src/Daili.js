import React, { Component } from 'react';

import Navbar from './assets/components/Navbar';
import Card from './assets/components/Card';
import Container from './assets/components/Container';

class Daili extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Card date="Feb 23, 2017" open />
          <Card date="Feb 22, 2017" />
          <Card date="Feb 21, 2017" />
        </Container>
      </div>
    );
  }
}

export default Daili;
