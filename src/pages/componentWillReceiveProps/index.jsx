import React from 'react';
// import EmailInput from './components/EmailInput';
import Count from './components/Count';

class ComponentWillReceiveProps extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
        email: 'emailInput',
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
    console.log('父组件 - render: ', this.state.count)
    return (
      <div>
        {/* <EmailInput email={this.state.email}></EmailInput> */}
        <Count count={this.state.count}></Count>
      </div>
    )
  }
}

export default ComponentWillReceiveProps;