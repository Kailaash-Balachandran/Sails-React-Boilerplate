import React from 'react';

class RandomQuote extends React.Component {
  render() {
    return <h1>{this.props.quote}</h1>;
  }
}

module.exports = RandomQuote;
