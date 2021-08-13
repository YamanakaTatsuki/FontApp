import React,{useState}from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FontSize from './FontSize';
import Align from './align';
import FontLine from './FontLine';
import FontType from './FontType';


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

  const [line,setLine] = useState(500);

  const [font,setFont] = useState('ScrumFontLine-Bold');

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={10}
          variant="outlined"
          // label ="文字を入力してください"
          inputProps={{style: {fontSize:count,color:color,textAlign:align,fontWeight:line,fontFamily:font,lineHeight:1.5}}}
          // InputLabelProps={{style: {fontSize: count}}}
          
          
          />
        <FontSize setCount={setCount} setColor={setColor}/>
        <Align setAlign={setAlign}/>
        <FontLine setLine={setLine}/>
        <FontType setFont={setFont}/>
      </div>
    </form>
       );
  }
