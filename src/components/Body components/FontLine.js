import React,{useState} from 'react';
import Button from '@material-ui/core/Button';

const FontLine = (props) => {
    return(
        <div>
            <Button onClick={()=>{props.setLine("fontWeightBold")}} variant="contained" color="primary" disableElevation>
                太い
            </Button>
            <Button onClick={()=>{props.setLine("fontWeightLight")}} variant="contained" color="primary" disableElevation>
                普通
            </Button>
        </div>
    );
}

export default FontLine;