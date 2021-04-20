import React, {useState} from 'react';
import { Button, Card, CardHeader, Grid, TextField, Fab } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {useDispatch} from 'react-redux'
import {addComment} from '../redux/actions'

export default function AddComment (){
    const [ msg, setMsg] = useState("");
    const dispatch = useDispatch()
    //const [ msgs, setMsgs] = useState([]);
    //const storeContext = useStoreContext();

    const handleChange =(e) =>{
        setMsg(e.target.value);
    }

   const handleClick =(e) =>{
        /*setMsgs([
            ...msgs, 
            {
                id: msgs.length,
                msg: msg
            }
        ]);*/
        //storeContext.add(msg);
        dispatch(addComment(msg));
        setMsg("");
    }

    return(
        <Grid container style={{padding: '20px'}}>
            <Grid item xs={11}>
                <TextField id="outlined-basic-email" label="Type Something" onChange={handleChange} value={msg} fullWidth />
            </Grid>
            <Grid xs={1} align="right">
                <Fab color="primary" onClick={handleClick} aria-label="add"><SendIcon /></Fab>
            </Grid>
        </Grid>   
    )
}
