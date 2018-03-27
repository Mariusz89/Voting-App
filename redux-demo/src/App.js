import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import AddComment from './AddComment';


const App = () => {
  return (
    <div className="App">
      <CommentsList />
      <AddComment />
    </div>
  );
};

export default App;