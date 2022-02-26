import React from "react";

export default function App() {
  return (
    <div className='ui container comments'>
      <div className="comment">
        <a href="/" className="avatar">
          <img src="" alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Сергей
          </a>
          <div className="metadata">
            <span className="date">
              Сегодня в 6 утра
            </span>
          </div>
          <div className="text">
            Хороший пост, Сэр!
          </div>
        </div>
      </div>
    </div>
  );
}
