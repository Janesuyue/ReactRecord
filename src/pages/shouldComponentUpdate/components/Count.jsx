import React from 'react';

class Count extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            count: undefined
        }
    }

    componentDidMount() {
        let promise = new Promise((resolut,reject) => {
            resolut(5)
        })

        setTimeout(() => {
            this.setState({
                count: 4
            })
        }, 6000)

        promise.then(res => {
            console.log(res)
            this.setState({
                count: res
            })
        })
    }

    /**
     * 根据shouldComponentUpdate() 返回值, 决定是否render重新渲染
     * 默认首次渲染不会触发该方法 或者使用forceUpdate() 方法时
     * 触发条件: props 或 state 发生改变时, 默认返回true
     * 如果componentDidMount在使用异步方法，在异步方法setState, 是不生效的(setState会触发render重新渲染), 
     * 而render方法在shouldComponentUpdate()生命周期返回false时不触发
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        if (nextProps.count !== nextState.count) {
            // 这里对比props和state的数据是否一致，如果不一致返回true, 重新渲染render
            this.setState({
                count: nextProps.count
            })
            return true
        }
        return false
    }

    render() {
        console.log('子组件 render ', 'state:',  this.state.count, 'props: ', this.props.count)
        return (
            <div>
                {this.state.count || this.props.count}
            </div>
        )
    }
}

export default Count