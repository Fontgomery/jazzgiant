import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap'
import './PanelButton.css'

const PanelButton = () => {
    return  (
        <ButtonGroup bsSize="small">
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
        </ButtonGroup>
    )
}

export default PanelButton
