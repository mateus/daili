import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {items: this.props.items}

    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({items: nextProps.items})
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

  dragEnd(e) {
    console.log(this.dragged);
  }

  dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('list__item--dragged-over');
  }

  dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove('list__item--dragged-over');
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item) => {
          return (
            <li
              key={item.id}
              draggable="true"
              onDragEnd={this.dragEnd}
              onDragStart={this.dragStart}
              onDragEnter={this.dragEnter}
              onDragLeave={this.dragLeave}
            >
              {item.text}
            </li>
          )
        }, this)}
      </ul>
    );
  }
}

export default List;
