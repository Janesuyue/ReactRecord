/*
 * @Author: Jian
 * @Date: 2021-08-03 10:33:45
 * @LastEditTime: 2021-12-10 23:24:05
 * @LastEditors: Jian
 * @Description: 
 * @FilePath: /react-record/src/App.js
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Constructor from './pages/constructor';
// import ComponentDidMount from './pages/componentDidMount';
// import ComponentWillMount from './pages/componentWillMount';
// import GetDerivedStateFromProps from './pages/getDerivedStateFromProps';
// import ComponentWillReceiveProps from './pages/componentWillReceiveProps';
// import ShouldComponentUpdate from './pages/shouldComponentUpdate';
// import GetSnapshotBeforeUpdate from './pages/getSnapshotBeforeUpdate';
// import ComponentDidUpdate from './pages/componentDidUpdate';

import Layout from './layout';
import Home from './pages/Home';
import './App.css';

import { routeList } from './config/proConfig';

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            {
              routeList.map(item => <Route key={item.url} path={item.url} component={item.route} />)
            }
            <Redirect to="/home" />
          </Switch>
        </Router>
      </Layout>
      // <Router>
      //   <Link to="/constructor">Constructor</Link>
      //   <br/>
      //   <Link to="/componentDidMount">ComponentDidMount</Link>
      //   <br/>
      //   <Link to="/componentWillMount">ComponentWillMount</Link>
      //   <br/>
      //   <Link to="/getDerivedStateFromProps">GetDerivedStateFromProps</Link>
      //   <br/>
      //   <Link to="/componentWillReceiveProps">ComponentWillReceiveProps</Link>
      //   <br/>
      //   <Link to="/shouldComponentUpdate">ShouldComponentUpdate</Link>
      //   <br/>
      //   <Link to="/getSnapshotBeforeUpdate">GetSnapshotBeforeUpdate</Link>
      //   <br/>
      //   <Link to="/componentDidUpdate">ComponentDidUpdate</Link>
      //   <Switch>
      //     <Route path="/constructor" component={Constructor} />
      //     <Route path="/componentDidMount" component={ComponentDidMount} />
      //     <Route path="/componentWillMount" component={ComponentWillMount} />
      //     <Route path="/getDerivedStateFromProps" component={GetDerivedStateFromProps} />
      //     <Route path="/componentWillReceiveProps" component={ComponentWillReceiveProps} />
      //     <Route path="/shouldComponentUpdate" component={ShouldComponentUpdate} />
      //     <Route path="/getSnapshotBeforeUpdate" component={GetSnapshotBeforeUpdate} />
      //     <Route path="/componentDidUpdate" component={ComponentDidUpdate} />
      //     <Redirect to="/constructor" />
      //   </Switch>
      // </Router>
    )
  }
}

export default App;