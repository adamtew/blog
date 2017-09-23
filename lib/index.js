import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return dom(
      'div',
      null,
      'Hello world'
    );
  }
}

ReactDOM.render(dom(Main, null), document.getElementById('root'));