import React from 'react';

class Constructor extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  render() {
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}

export default Constructor;