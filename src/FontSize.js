import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Fontsize = (props) => {

    return (
      <Button  onClick={()=>{setCount(count + 1)}} variant="contained" color="primary" disableElevation>
        文字を大きくします
      </Button>
    );
  }

export default Fontsize;
