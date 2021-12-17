import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  // DOM节点挂载后执行
  componentDidMount() {
    // componentDidMount 在render 之后执行
    // 如果state数据更新则重新渲染render
    this.setState({
      count: 2
    })
  }

  render() {
    console.log('render', this.state.count)
    // count 1 第一次render
    // count 2 componentDidMount 处理改变的count 重新渲染 render
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}

export default App;