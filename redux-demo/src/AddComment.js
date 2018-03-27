import React from 'react'
import { connect } from 'react-redux'
import { addComment } from './actions'
import './AddComment.css'

let AddComment = ({ dispatch }) => {
  let input
  return (
    <div className = "addComment">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
     	dispatch(addComment(input.value))
               input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          placeholder = "Add comment ..."
        />
        <button className= "buttonAddComment btn btn-primary" type="submit">
        	Add Comment
        </button>
      </form>
    </div>
  )
}

AddComment = connect()(AddComment)
export default AddComment;