import React from "react";
import { useState } from 'react';
import './Form.css'

function Form({ onSubmit }) {
    const [userName, setUserName] = useState('');
    const [favScene, setFavScene] = useState('');
    const [pageNum, setPageNum] = useState('');
    const [bookName, setBookName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            userName,
            favScene,
            pageNum,
            bookName
        };
        console.log('form submitted: ', {post});
        onSubmit(post);

        setUserName('');
        setFavScene('');
        setPageNum('');
        setBookName('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="left-inputs">
                        <div className="form-row">
                            <label htmlFor="username">Username: </label>
                            <input
                                id="username" 
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="page">Page #: </label>
                            <input 
                                id="page"
                                type="number"
                                value={pageNum}
                                onChange={(e) => setPageNum(e.target.value)}
                                placeholder="Page #"
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="name">Book Name: </label>
                            <input 
                                id="name"
                                type="text"
                                value={bookName}
                                onChange={(e) => setBookName(e.target.value)}
                                placeholder="Book Name"
                            />
                        </div>
                        <button type="submit" className="form-submit">
                            Post
                        </button>
                    </div>
                    <div className="right-input">
                        <label htmlFor="fav-scene" className="fav-scene-label">Scene/Quote: </label>
                        <input 
                            id="fav-scene"
                            type="text"
                            value={favScene}
                            onChange={(e) => setFavScene(e.target.value)}
                            placeholder="Favorite scene/quote"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;