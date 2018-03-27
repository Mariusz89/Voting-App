import React from 'react';
import RemoveComment from './RemoveComment';
import './Comment.css';
import 'animate.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li className = "Comment animated fadeInLeft">
  	<div className ="com">{text}</div> 
  	<div className = "com1"><span>votes: {votes}</span></div> 
  	<div className="thumbUp" onClick={() => thumbUpComment(id)}></div>
    <div className="thumbDown" onClick={() => thumbDownComment(id)}></div>
    <RemoveComment id = {id} />
  </li>

export default Comment;









