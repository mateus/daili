import React, { Component } from 'react';

import Navbar from './assets/components/Navbar';
import Card from './assets/components/Card';
import Container from './assets/components/Container';

import moment from 'moment';

class Daili extends Component {
  constructor(props) {
    super(props);

    this.state = {userData: {}};
    this.cardClicked = this.cardClicked.bind(this);
  }

  cardClicked(e) {
    e.stopPropagation();

    let card = e.target;
    while (!card.classList.contains('card-wrapper')) {
      card = card.parentElement;
    };
    console.log(card);
  }

  shouldBeOpen(date) {
    if (date === moment().format()) { return true };
    return false;
  }

  render() {
    const userData = {
      name: "Mateus Ferreira Silva",
      profile_picture: "",
      logs: [
        {
          date: moment().format(),
          log: [
            {
              text: 'Added this morning',
              id: Date.now
            },
            {
              text: 'Added earlier today',
              id: Date.now + 1
            }
          ]
        },
        {
          date: moment().subtract(1, 'days').format(),
          log: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              id: Date.now() + 2
            },
            {
              text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
              id: Date.now() + 3
            },
            {
              text: 'ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
              id: Date.now() + 4
            }
          ]
        },
        {
          date: moment().subtract(2, 'days').format(),
          log: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              id: Date.now() + 5
            },
            {
              text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
              id: Date.now() + 6
            },
            {
              text: 'ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
              id: Date.now() + 7
            }
          ]
        }
      ]
    }

    return (
      <div>
        <Navbar />
        <Container>
          {userData.logs.map((item, i) => {
            return (
              <Card
                handleClick={this.cardClicked}
                key={i}
                date={item.date}
                items={item.log}
                open={this.shouldBeOpen(item.date)}
              />
            );
          }, this)}
        </Container>
      </div>
    );
  }
}

export default Daili;
