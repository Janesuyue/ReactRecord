import React from 'react';

class ComponentWillMount extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    // componentWillMount 方法在DOM节点挂载之前触发，也就是render方法之前
    componentWillMount() {
        console.log('componentWillMount', this.state.count) // count: 1
        this.setState({
            count: 3
        })
    }

    // DOM节点挂载之后触发
    componentDidMount() {
        // 这里我们可以到 当前的count为3, count的值经过componentWillMount处理后的
        console.log('componentDidMount', this.state.count) // count: 3
        this.setState({
            count: 2
        })
    }

    render() {
        console.log('render: ', this.state.count)
        // count: 3 第一次render
        // count: 2 componentDidMount 更改值之后的render
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default ComponentWillMount;