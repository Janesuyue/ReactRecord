import React from 'react';

class Count extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            count: undefined
        }
    }

    // getDerivedStateFromProps 在DOM节点渲染之前（render 渲染之前）调用 与 (props/state)状态更新时被调用
    // 可以监听props/state 值的更改 从而改变state 状态
    static getDerivedStateFromProps(props, state) {
        console.log(props)
        if (props.count !== state.count) {
            // return 返回 一个对象来更新state
            return {
                count: props.count,
            };
        }
        // return  返回 null 则不需要更新
        return null;
    }

    // 与componentWillReceiveProps 对比
    // componentWillReceiveProps 仅在父组件重新render渲染时触发
    // 而getDerivedStateFromProps 则是在状态props/state发生改变时触发

    componentDidMount() {
        setTimeout(() => {
            console.log('componentDidMount -> setTimeout: ', this.state.count)
            // componentDidMount -> setTimeout: 2
            this.setState({
                count: 4
            })
        }, 6000)
    }

    render() {
        console.log('render ', 'state:',  this.state.count, 'props: ', this.props.count)
        // render state: 1, props: 1 ==> 第一次接受props的值时 render
        // render state: 2, props: 2 ==> props中的count发现改变时 触发getDerivedStateFromProps 方法时 render
        // render state: 2, props: 2 ==> componentDidMount中setTimeout方法六秒后更新state时 render
        return (
            <div>
                {this.state.count || this.props.count}
            </div>
        )
    }
}

export default Count