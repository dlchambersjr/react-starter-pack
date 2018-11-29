import React from 'react';

import './stylesheets/design.scss';

import Header from './components/header/header.js';
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
      <React.Fragment>
        <Header>
          <div >
            <h1>
              HEADER TITLE HERE
            </h1>
          </div>
        </Header>
        <Page content={this.state.content} />
      </React.Fragment>

    );
  }
}

export default App;
