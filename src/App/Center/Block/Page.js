import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap'
import data from './Giants.json'
import './Page.css';

class Page extends Component {

    getPageNum(){
        let nameList = []
        JSON.parse(JSON.stringify(data), (k) => {
            nameList.push(k)
        })
        nameList.pop()
        return(nameList.length)
    }

    render(){
        const pageNumber = Math.ceil(this.getPageNum() / 12)
        const updateActivePage = this.props.updateActivePage

        return (
            <Pagination
               prev
               next
               first
               last
               ellipsis
               boundaryLinks
               items={pageNumber}
               activePage={this.props.activePage}
               onSelect={(e) => updateActivePage(e)}
              />)
    }
}

export default Page
