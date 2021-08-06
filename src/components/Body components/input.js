import React,{useState}from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FontSize from './FontSize';
import Align from './align';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(6),
      width: '70ch',
      flexGrow: 1
    },
  },
}));


export default function MuiTextField(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [count,setCount] = useState(20);

  const [color,setColor] = useState('black');

  const [align,setAlign] = useState('left');

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
          inputProps={{style: {fontSize:count,color:color,textAlign:align}}}
          InputLabelProps={{style: {fontSize: count}}}
          
          />
        <FontSize setCount={setCount} setColor={setColor}/>
        <Align setAlign={setAlign}/>
      </div>
    </form>
       );
  }
