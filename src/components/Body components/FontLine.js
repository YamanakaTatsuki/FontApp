import React,{useState} from 'react';
import Button from '@material-ui/core/Button';

const FontLine = (props) => {
    return(
        <div>
            <Button onClick={()=>{props.setLine(900)}} variant="contained" color="primary" disableElevation>
                太い
            </Button>
            <Button onClick={()=>{props.setLine(100)}} variant="contained" color="primary" disableElevation>
                普通
            </Button>
        </div>
    );
}

export default FontLine;