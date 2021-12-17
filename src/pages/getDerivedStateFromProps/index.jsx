import React from 'react';
import Count from './components/Count';

class GetDerivedStateFromProps extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    // 在三秒后更改 count 的值为2
    setTimeout(() => {
      this.setState({
        count: 2
      })
    }, 3000)
  }

  render() {
    console.log('父组件 render: ', this.state.count)
    return (
      <div>
        <Count count={this.state.count}></Count>
      </div>
    )
  }
}

export default GetDerivedStateFromProps;