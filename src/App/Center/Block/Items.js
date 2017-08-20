import React from 'react'
import { Row, Col, Panel } from 'react-bootstrap'
import PanelButton from './PanelButton.js'
import './Items.css'
import data from './Giants.json'


const loadJSON = () => {
    let nameList = []
    JSON.parse(JSON.stringify(data), (k) => {
        nameList.push(k)
    })
    nameList.pop()
    return(nameList)
}

const Items = (props) => {

    const imgStyle = {
        "height": '100%',
        "width": '100%',
        "boxShadow": '20px 20px 20px rgba(0,0,0,0.4)'
    }

    let nameList = loadJSON()

    let begin = (props.page - 1) * 12
    let end = begin + 12
    let slicedList = nameList.slice(begin, end)

    const colList = slicedList.map((name) => {

        const nameNoSpace = name.replace(/\s/g, "")
        const jazzManImage = require("./img/" + nameNoSpace + ".jpeg")

        return (
            <Col sm={6} md={3}>
                <Panel header={name} footer={PanelButton()}>
                    <img style={imgStyle} src={jazzManImage} alt={name + " image"}></img>
                </Panel>
            </Col>
                )}
    )

    return (
        <Row className="show-grid">
            {colList}
        </Row>
    )
}

export default Items
