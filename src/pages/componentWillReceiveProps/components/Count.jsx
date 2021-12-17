import React from 'react';

class Count extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            count: undefined
        }
    }

    // // getDerivedStateFromProps 在DOM节点渲染之前（render 渲染之前）调用 与 (props/state)状态更新时被调用
    // // 可以监听props/state 值的更改 从而改变state 状态
    // static getDerivedStateFromProps(props, state) {
    //     console.log(props)
    //     if (props.count !== state.count) {
    //         // return 返回 一个对象来更新state
    //         return {
    //             count: props.count,
    //         };
    //     }
    //     // return  返回 null 则不需要更新
    //     return null;
    // }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.count !== this.props.count) {
            this.setState({
                count: nextProps.count
            })
        }
    }

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
        return (
            <div>
                {this.state.count || this.props.count}
            </div>
        )
    }
}

export default Count