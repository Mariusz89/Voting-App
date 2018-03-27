import React from 'react'
import { connect } from 'react-redux'
import { removeComment } from './actions'
import './removeComment.css'

let RemoveComment = ({id, dispatch}) => {
  return (
    <div className="removeComment"
      onClick={() => {
        dispatch(removeComment(id));
      }}>
    </div>
  )
}

RemoveComment = connect()(RemoveComment);
export default RemoveComment;

