import React, { Component } from 'react';
import List from './List';
import _ from 'lodash';
import dots from '../svg/dots.svg';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {value: '', items: this.props.items || []};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <List items={this.state.items} />
    );
  }

  render() {
    return (
      <div className="card-wrapper">
        <div className="card">
          <div className="card__content">
            { this.renderInput() }
            { this.renderList() }
          </div>
          { this.renderButton() }
        </div>
        <div className="card-date">
          <span>Feb, 23</span>
          <span className="card-date__year">2017</span>
        </div>
      </div>
    );
  }
}

export default Card;
