// React Dependencies
import React from 'react';

// Component Dependencies
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { messages: [] };
  }

  update(value) {
    let messages = this.state.messages;

    messages.push(value);
    this.setState(messages);
  }

  render() {
    return (
      <div>
        <MessageBox data={this.state.messages} />
        <MessageInput updateMessageBox={this.update.bind(this)} />
      </div>
    );
  }
}
