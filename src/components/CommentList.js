import React from 'react';
import AddComment from './AddComment';
import {useSelector} from 'react-redux';

export default function CommentList(){
    const comment = useSelector(state => state.addComments.content);
    console.log(comment);
    return(
        <AddComment/>
    )
}