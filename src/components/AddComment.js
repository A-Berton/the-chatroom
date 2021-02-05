import React, {useState} from 'react';
import { Heading, Box, Form, Button, Columns} from 'react-bulma-components';
import {useDispatch} from 'react-redux'
import {addComment} from '../redux/actions'

export default function AddComment (){
    const { Input, Field, Control } = Form;
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
        <Columns.Column className="chat-body-inner">
            <Box>
                <Heading className="has-text-info" subtitle size={5}>Envoi ton message!</Heading>
                <Field className="is-grouped">
                    <Control className="is-expanded">
                        <Input className="is-my-input" placeholder="Your comment here" type="text" onChange={handleChange} value={msg}/>
                    </Control>
                    <Control>
                        <Button color="info" onClick={handleClick}>Send</Button>
                    </Control>
                </Field> 
            </Box>
        </Columns.Column> 
    )
}
