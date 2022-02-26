import React from 'react';
import CommentDetail from './components/CommentDetail';

export default function App() {
  return (
    <div className='ui container comments'>
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
}
