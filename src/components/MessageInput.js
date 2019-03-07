// React Dependencies
import React from 'react';

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    let value = event.target.value;

    if (parseInt(event.which) === 13) {
      this.props.updateMessageBox(value);
      value = '';
    }

    this.setState({
      message: value
    });
  }

  render() {
    return (
      <div>
        <input
          ref={(component) => this.__input = component}
          onKeyPress={this.updateInput}
          onChange={this.updateInput}
          value={this.state.message}
          type="text"
          placeholder="Say Hello To Groot" />
      </div>
    );
  }
}
