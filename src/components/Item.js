import React from 'react';
import { Box} from 'react-bulma-components';

export default function Item ({msg, index}){
    
    const left = 
        <div className="level level-left is-mobile">
            <div className="msg level-left"></div>
                <Box className="pl-3 msg level-left has-text-left has-background-primary">
                <p>{msg.msg}</p> 
                </Box>
            </div> 
    ;


    const right = 
        <div className="level level-right is-mobile">
            <div className="msg level-right"></div>
                <Box className="pl-3 msg level-right has-text-left has-background-primary">
                <p>{msg.msg}</p> 
                </Box>
            </div>
    ;

    if(index % 2 === 0){
        console.log(true);
        return(left);
    }
    console.log(false);
    return(right);
}