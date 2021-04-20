import React from 'react';
import AddComment from './AddComment';
import {useSelector} from 'react-redux';
import { Grid, List, ListItem, ListItemText, Divider, Card, CardContent } from '@material-ui/core';

export default function CommentList(){
    const comments = useSelector(state => state.addComments.msgs);

    const boxColor = (index) => {
        const colorblue= "has-background-info";
        const colorgreen="has-background-primary right"
        return index%2 ? colorblue:colorgreen  
    }

    const ListMsg = comments.map((msg, index)=>
    <Card className={ boxColor(index)} key = {index}>
        <CardContent>
        {msg} 
        </CardContent>
    </Card>
    
    );

    return(
        <Grid item xs={9} >
            <List className="messageArea">
                <ListItem>
                    <Grid container>
                        <Grid >
                            <ListItemText>{ListMsg}</ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>

            <Divider />
            <AddComment/>
        </Grid>
    )
}