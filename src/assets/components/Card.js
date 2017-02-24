import React, { Component } from 'react';
import _ from 'lodash';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {value: '', items: []};
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
    if (this.state.value) {
      return (
        <span className="card__input-mirror">{this.state.value}</span>
      );
    }
  }

  renderInput() {
    if (this.props.open) {
      return (
        <form className="card__input-wrapper" onSubmit={this.handleSubmit}>
          <input className="card__input"
            type="text"
            placeholder="What did I do today?"
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
    if (this.props.open && this.state.items.length > 0) {
      return (
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

  renderList2() {
    if (!this.props.open) {
      return (
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="card-wrapper">
        <div className="card">
          <div className="card__content">
            { this.renderInput() }
            { this.renderList() }
            { this.renderList2() }
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
