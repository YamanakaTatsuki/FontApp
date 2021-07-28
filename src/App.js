import React,{useState}from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(6),
      width: '70ch',
    },
  },
}));


export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [count,setCount] = useState(20);

  const [color,setColor] = useState('black');

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={40}
          variant="outlined"
          label ="文字を入力してください"
          inputProps={{style: {fontSize: count,color:color}}}
          InputLabelProps={{style: {fontSize: count}}}

          />
      <Button  onClick={()=>{setCount(27)}} variant="contained" color="primary" disableElevation>
        文字を大きくします
      </Button>
      <Button  onClick={()=>{setCount(15)}} variant="contained" color="primary" disableElevation>
        文字を小さくします
      </Button>
      <Button  onClick={()=>{setColor('red')}} variant="contained" color="primary" disableElevation>
        文字を赤色に変更します
      </Button>
      </div>
    </form>
       );
  }