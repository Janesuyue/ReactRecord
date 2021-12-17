import React from 'react';
import Count from './components/Count';

class ComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }

    componentDidMount() {
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

export default ComponentDidUpdate