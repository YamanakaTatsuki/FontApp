import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const FontSize = (props) => {

    return (
      <div>
        <Button  onClick={()=>{props.setCount(27)}} variant="contained" color="primary" disableElevation>
          文字を大きくします
        </Button>
        <Button onClick={()=>{props.setCount(15)}} variant="contained" color="primary" disableElevation>
          文字を小さくします
        </Button>
        <Button onClick={()=>{props.setColor('red')}} variant="contained" color="primary" disableElevation>
          色を赤色に変更します。
        </Button>
      </div>
    );
  }

export default FontSize;
