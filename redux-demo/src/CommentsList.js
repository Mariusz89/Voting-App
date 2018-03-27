import React from 'react';
import Comment from './CommentContainer';
import './commentsList.css';

const CommentsList = ({comments}) => 
	<ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}
		<div>
			<div className="containerLogo">
				<div className= "commentsLogo animated flash"></div>
			</div>
		</div>
	</ul>;

export default CommentsList;