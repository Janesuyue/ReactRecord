import React from 'react';

class Count extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            count: undefined
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props)
        if (props.count !== state.count) {
            return {
                count: props.count,
            };
        }
        return null;
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