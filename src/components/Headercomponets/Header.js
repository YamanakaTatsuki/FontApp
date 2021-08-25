import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ScrollableTabsButtonAuto from '/Users/yamanakatatsuki/FontApp/src/components/Headercomponets/MenuBotton.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function Header(props) {
  
  const classes = useStyles();
  
  let menu ;
  
  const [isMenuOpen,setMenu] = useState(false);
  
  const menuOpen = () =>{
    setMenu(true)
  };


  if (isMenuOpen===true) {
    menu = (<ScrollableTabsButtonAuto setMenu = {setMenu}/>)
  }
  
  
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Font App
          </Typography>
            <Button variant="contained" onClick={()=>{menuOpen()}}>Menu</Button>
        </Toolbar>
      </AppBar>
      {menu}
    </div>
  );
}
