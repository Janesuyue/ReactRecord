import React from 'react';
import { Link } from 'react-router-dom';

import { routeList } from '../../config/proConfig'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="link_main" >
                {
                    routeList.map(item => <div key={item.url} className="link_card">
                        <Link to={item.url}>{item.name}</Link>
                    </div>)
                }
            </div>
        )
    }
}

export default Home;