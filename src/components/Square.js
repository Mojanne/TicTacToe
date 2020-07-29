import React from 'react'
import { Button } from '@material-ui/core';

export default function Square(props) {
    return (
        <Button color="primary" className="square" onClick={props.onClick}>
            {props.value}
        </Button>
    )
}
