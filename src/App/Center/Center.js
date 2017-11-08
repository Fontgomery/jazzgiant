import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import Title from './Element/Title.js'
import Items from './Block/Items.js'
import Page from './Block/Page.js'
import './Center.css'

class Center extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activePage: 1
        }
    }

    updateActivePage (e) {
        this.setState({activePage: e})
    }

    render () {

        const activePage = this.state.activePage
        const updateActivePage = (e) => this.updateActivePage(e)

        return  (
            <Grid className="container-fluid">
                <Title />
                <Page activePage={activePage}
                      updateActivePage={updateActivePage} />
                <Items page={activePage} />
                <Page activePage={activePage}
                      updateActivePage={updateActivePage} />
            </Grid>
        )
    }
}

export default Center
