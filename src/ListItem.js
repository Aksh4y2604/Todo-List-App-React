import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'


export default function ListItem({task,tasklist,setTasklist}){
    const [style,setStyle]=useState('ListItemdefault')
    
    function deleteItem(){
        console.log(tasklist)
        setTasklist(tasklist.filter((el)=>el!==task)) 
    }
    
    function completed(){
        setStyle('ListItemCompleted')
    }
    return(
    <div>
        <Grid container spacing={1}>
            
            <Grid item xs={3} className="gridItem2"></Grid>
            <Grid item xs={4} className="gridItem">
                <h3  className={style}>{task}</h3>
            </Grid>
            <Grid item xs={2} className="gridItem">
                <IconButton aria-label="delete" onClick={()=>deleteItem()}>
                    <DeleteIcon color='primary'/>
                </IconButton>
           
                        <Button className="completed" onClick={()=>completed()} color='primary'> - </Button>
                </Grid> 
            
            <Grid item xs={3} className="gridItem2"></Grid>
        </Grid>
        
 </div>
    
    )
}