import React from 'react';
import './stylesheets/design.scss';
import Page from './components/page/page.js';
import content from './data/content.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: content,
    };
  }

  render() {
    return (
      <Page content={this.state.content} />
    );
  }
}

export default App;
