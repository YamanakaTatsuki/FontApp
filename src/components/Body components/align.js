import React,{useState} from 'react';
import Button from '@material-ui/core/Button';

const Align = (props) =>{
    return(
    <div>
        <Button  onClick={()=>{props.setAlign('right')}} variant="contained" color="primary" disableElevation>
            右寄せ
        </Button>
        <Button onClick={()=>{props.setAlign('left')}} variant="contained" color="primary" disableElevation>
            左寄せ
        </Button>
        <Button onClick={()=>{props.setAlign('center')}} variant="contained" color="primary" disableElevation>
            中央寄せ
        </Button>
    </div>
    );
}

export default Align;