import React from 'react';

// import './stylesheets/design.scss';

// import Header from './components/header/header.js';
// import Page from './components/page/page.js';
import List from './components/list/list.js';
import content from './data/content.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: content,
      list: {
        type: 'unordered', // unordered or ordered
        items: ['mangos', 'dates', 'cherries'],
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* FIXME:  The code below is temporarily commented out to highlight the list assignment. */}
        {/* <Header>
          <div >
            <h1>
              HEADER TITLE HERE
            </h1>
          </div>
        </Header> */}
        <List
          type={this.state.list.type}
          items={this.state.list.items}
        >
          <ul>
            <li>This is a test of props.children</li>
          </ul>
        </List>
        <List>
          <ul>
            <li>This is a test of props.children</li>
          </ul>
        </List>
        {/* <Page content={this.state.content} /> */}
      </React.Fragment>

    );
  }
}

export default App;
