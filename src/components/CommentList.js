import React from 'react';
import AddComment from './AddComment';
import {addComment} from '../redux/actions'
import {useSelector} from 'react-redux';

export default function CommentList(){
    const comment = useSelector(state => state.addComment);
    console.log(comment)
    return(
        <AddComment/>
    )
}