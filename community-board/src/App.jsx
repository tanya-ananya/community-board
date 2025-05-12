import React from 'react';
import './App.css'
import Form from './components/Form';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <div className='header'>
        <h1>Quote Community Board</h1>
        <h2>Welcome to the QCB where you can post your favorite quotes! ✨</h2>
      </div>
      <div className="posts-list">
        {posts.map((post, index) => (
          <Card 
            key={index}
            userName={post.userName}
            favScene={post.favScene}
            pageNum={post.pageNum}
            bookName={post.bookName}
          />
        ))}
      </div>
      <div className="form-element">
        <div className="form-container">
          <div className='description'>
            <h2 className='post-title'>Make a Post 🖊️</h2>
            <h3 className='post-description'>Have a favorite quote or scene you want to show off? Enter it here! You can enter any book scene, quote, or character description.</h3>
            <p>You can use your real name, nickname, username from Instagram if you want anyone to recognize you, or a fake name if you'd like!</p>
          </div>
          <div className="form">
            <h2 className='enter-title'>Enter & Submit</h2>
            <Form onSubmit={handleAddPost}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;