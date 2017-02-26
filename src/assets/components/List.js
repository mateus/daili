import React, { Component } from 'react';
import garbage from '../svg/garbage.svg';
import dots from '../svg/dots.svg';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {items: this.props.items}

    this.toDragId = 0;
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.dragEnter = this.dragEnter.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
    this.swapItems = this.swapItems.bind(this);
  }

  swapItems() {
    if (this.fromDragId === this.toDragId) { return; }

    let fromId = 0;
    let toId = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === parseInt(this.fromDragId, 10)) {
        fromId = i;
      }
      if (this.state.items[i].id === parseInt(this.toDragId, 10)) {
        toId = i;
      }
    }

    let tempItems = this.state.items;
    let tempItem = tempItems[fromId];

    tempItems.splice(fromId, 1);
    this.setState({items: tempItems});
    tempItems.splice(toId, 0, tempItem);
    this.setState({items: tempItems});
    this.forceUpdate();
  }

  deleteItem(item) {
    let tempItems = this.state.items;
    tempItems.splice(tempItems.indexOf(item), 1)
    this.setState({items: tempItems});
    this.props.update(tempItems);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({items: nextProps.items})
  }

  dragStart(e) {
    this.fromDrag = e.currentTarget;
    this.fromDragId = e.currentTarget.dataset.key;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

  dragEnd(e) {
    this.swapItems();
  }

  dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('list__item--dragged-over');
    if (this.toDragId !== e.target.dataset.key) {
      this.toDragId = e.target.dataset.key;
    }
    this.swapItems();
  }

  dragLeave(e) {
    e.preventDefault();
    if (this.toDragId !== e.target.dataset.key) {
      this.toDragId = e.target.dataset.key;
    }
    e.target.classList.remove('list__item--dragged-over');
  }

  render() {
    return (
      <ul className="list">
        {this.state.items.map((item) => {
          return (
            <li
              className="list__item"
              key={item.id}
              data-key={item.id}
              draggable="true"
              onDragEnd={this.dragEnd}
              onDragStart={this.dragStart}
              onDragEnter={this.dragEnter}
              onDragLeave={this.dragLeave}
            >
              <img className="list__dots" src={dots} alt="dots"/>
              {item.text}
              <button className="list__remove-button" onClick={this.deleteItem.bind(this, item)}>
                <img src={garbage} alt="Remove"/>
              </button>
            </li>
          )
        }, this)}
      </ul>
    );
  }
}

export default List;
