import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap'
import './PanelButton.css'

const PanelButton = (name) => {

    const searchNameWiki = name.replace(/\s/g, "_")
    const searchNameYoutube = name.replace(/\s/g, "+")
    const requestURLtoWiki = "https://en.wikipedia.org/wiki/" + searchNameWiki
    const requestURLtoYoutube = "https://www.youtube.com/results?search_query=" + searchNameYoutube

    return (
        <ButtonGroup bsSize="small">
            <Button href="#">A</Button>
            <Button href={requestURLtoYoutube} target="_blank">Y</Button>
            <Button href={requestURLtoWiki} target="_blank">W</Button>
        </ButtonGroup>
    )
}

export default PanelButton
