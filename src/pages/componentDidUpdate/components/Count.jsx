import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: undefined
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                count: 4
            })
        }, 6000)
    }

    /**
     * 每次更新时触发, 更新后立即触发, 首次渲染不会触发
     * prevProps 的值为上一次props的值
     * prevState 的值为上一次state的值
     * snapshot 的值为getSnapshotBeforeUpdate()生命周期的传值
     * 如果shouldComponentUpdate()生命周期函数返回为false 则componentDidUpdate 不会触发
     * tip: 在componetnDidUpdate中使用setState需要包裹在一个条件语句中，避免陷入死循环
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot)
        if (prevProps.count !== this.props.count) {
            this.setState({
                count: this.props.count
            })
        }
    }

    /**
     * shouldComponentUpdate 会使componentDidMount中调用异步方法更改state
     */
    shouldComponentUpdate(nextProps, nextState){
        return false
    }

    render() {
        console.log('子组件 render, state: ' + this.state.count + ', props: ' + this.props.count)
        return (
            <div>
                {this.state.count || this.props.count}
            </div>
        )
    }
}

export default Count