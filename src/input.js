import React,{useState}from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FontSize from './FontSize';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(6),
      width: '70ch',
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
          inputProps={{style: {fontSize:count,color:color}}}
          InputLabelProps={{style: {fontSize: count}}}

          />
        <FontSize setCount={setCount} setColor={setColor}/>
      </div>
    </form>
       );
  }
