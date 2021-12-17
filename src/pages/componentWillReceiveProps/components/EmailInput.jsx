import React, { Component } from 'react'

class EmailInput extends Component {
    state = { email: this.props.email };

    componentWillReceiveProps(nextProps) {
        // 这会覆盖所有组件内的 state 更新！
        // 不要这样做。
        this.setState({ email: nextProps.email });
    }

    handleChange = event => {
        this.setState({ email: event.target.value });
    };
  
    render() {
        return <input onChange={this.handleChange} value={this.state.email} />;
    }
}

export default EmailInput