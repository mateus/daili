import React, { Component } from 'react';
import List from './List';
import _ from 'lodash';
import moment from 'moment';
import dots from '../svg/dots.svg';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {value: '', items: this.props.items || []};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }

  handleInputChange() {
    this.setState({value: this.refs.input.value.trim()});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.value) {
      return;
    }

    const newItem = {
      text: this.state.value,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem)
    }));

    this.setState({value: ''});
    this.refs.input.value = '';
  }

  updateItems(items) {
    this.setState({items});
  }

  renderInputValue() {
    return (
      <span className="card__input-mirror">
        <img className="card__input-mirror-dots" src={dots} alt="dots"/>
        <span>{this.state.value || '...'}</span>
      </span>
    );
  }

  renderInput() {
    if (this.props.open) {
      return (
        <form className="card__input-wrapper" onSubmit={this.handleSubmit}>
          <input className="card__input"
            type="text"
            placeholder="What happened today?"
            ref="input"
            onChange={this.handleInputChange}
          />
          { this.renderInputValue() }
        </form>
      )
    }
  }

  renderButton() {
    if (this.props.open) {
      return (
        <div className="card__button-wrapper">
          <button className="card__button">Save</button>
        </div>
      );
    }
  }

  renderList() {
    return (
      <List
        update={this.updateItems}
        items={this.state.items}
        id={Math.floor(Math.random() * (99999 - 0 + 1)) + 0}
      />
    );
  }

  formatDate() {
    const dateNow = moment(this.props.date).calendar();
    return dateNow.slice(0, dateNow.indexOf('at') - 1)
  }

  render() {
    if ((!this.props.open && this.state.items.length > 0) ||
        (this.props.open)) {
      return (
        <div className={this.props.open ? 'card-wrapper card-wrapper--open' : 'card-wrapper'}>
          <div className="card">
            <div className="card__content">
              { this.renderInput() }
              { this.renderList() }
            </div>
            { this.renderButton() }
          </div>
          <div className="card-date">
            <span className="card-date__ll">{moment(this.props.date).format("LL")}</span>
            <span className="card-date__calendar">{this.formatDate()}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default Card;
