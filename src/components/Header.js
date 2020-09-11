import React from "react";
import { useHistory } from "react-router-dom";

import { AppBar, Toolbar, Button, Container } from "@material-ui/core";
import { Home } from '@material-ui/icons';

import logoImage from '../assets/images/stemchamp-logo.png';

function Header(){

  let history = useHistory();
  
  function changeRoute(path){
    history.push(path)
  }
  
  return(
    <AppBar position="static" className="header-custom" style={styles.headerCustom}>
      <Container>
        <Toolbar>
          <img alt="Logo" src={logoImage} />
          <div style={styles.navContent}>
            <Button color="default" onClick={() => changeRoute('/')} style={styles.navLink}><Home /></Button>
            <Button color="default" onClick={() => changeRoute('/about')} style={styles.navLink}>About</Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )

}

const styles = {
  headerCustom:{
    backgroundColor:"#FFFFFF",  
    boxShadow:"unset"
  },
  navContent:{
    marginLeft:"auto",
    marginRight:"20px"
  },
  navLink:{
    marginLeft:"10px", 
    marginRight:"10px"
  }
}

export default Header;