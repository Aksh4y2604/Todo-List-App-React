import React,{useState} from 'react';
import ListItem from './ListItem';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
export default function Todo(){

    const [task,setTask]=useState('');
    const [tasklist,setTasklist]=useState([])

    function addTask(){
        if (task!==""){
        setTask(task)
        setTasklist([...tasklist,task])
        console.log(tasklist)
        setTask('')
    }
}
    return (
        <div id="todo">
            <Grid container spacing={1}>
            
            <Grid item xs={3} className="gridItem2"></Grid>
            <Grid item xs={6} className="gridItem">
            
                <Input 
                type="text"
                value={task}
                onChange={(e)=>{setTask(e.target.value)}}
                id="task-input"
                placeholder="Add Task..."
                autoComplete="off"
                className="Input"
                color="primary"
                />
            
            
                <Button
                className="buuuton"
                onClick={()=>addTask()}
                color='primary'>Add Task</Button> 
            </Grid>
            <Grid item xs={3} className="gridItem2"></Grid>
            </Grid>
            {tasklist.map(item=>{
                return(
                    <ListItem task={item} tasklist={tasklist} setTasklist={setTasklist} ></ListItem>
                )
            })}
            
        </div>
    )

}