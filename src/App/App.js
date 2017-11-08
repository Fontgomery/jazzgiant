import React from 'react'
import {
    Switch,
    Router,
    Route,
} from 'react-router-dom'
import Header from './Header/Header.js'
import Center from './Center/Center.js'
import Footer from './Footer/Footer.js'
import Request from './Request/Request.js'
import createBrowserHistory from '../../../node_modules/history/createBrowserHistory'

import './App.css'

class App extends React.Component {

    render () {
        const history = createBrowserHistory()
        return (
        <div>
            <Header />
            <Router history={history}>
              <Switch>
                <Route exact path="/jazzgiant" component={Center}/>
                <Route path="/jazzgiant/request" component={Request}/>
              </Switch>
            </Router>
            <Footer />
        </div>
        )
    }
}

export default App
