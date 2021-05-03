import React from "react";

import Todo from './todolist';
import Typography from '@material-ui/core/Typography'
import './index.css';
import Grid from '@material-ui/core/Grid';

function App(){
  return(
  <div>
    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
    <Typography variant="h3" component="h2" className="header">
  YOUR TODO LIST
</Typography>
</Grid>
    <Todo/>

    
  </div>
  )
  
}
export default App;