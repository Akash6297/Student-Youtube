/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calculator from './Calculator';
import ChatGPT from './ChatGPT';
import '../css/main.css';

const Main = () => {
  const [name, setName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [username, setUsername] = useState(''); // Add state for username
  const [videos, setVideos] = useState([]);
  const [todoVisible, setTodoVisible] = useState(false);
  const [noteVisible, setNoteVisible] = useState(false);
  const [calculatorVisible, setCalculatorVisible] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);

  const toggleVisibility = (setter) => {
    setTodoVisible(false);
    setNoteVisible(false);
    setCalculatorVisible(false);
    setChatVisible(false);
    setter(true);
  };

  const [todoContent, setTodoContent] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const downloadContent = (content, fileName) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    element.click();
  };

  const handleAddVideo = async () => {
    try {
      await axios.post('https://studentyt.onrender.com/api/addVideo', { name, videoUrl, username }); // Include username
      setVideoUrl('');
      fetchVideos();
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://studentyt.onrender.com/api/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const fetchVideosByUsername = async () => { // Fetch videos by username
    try {
      const response = await axios.get(`https://studentyt.onrender.com/api/videos/${username}`);
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleDeleteVideo = async (videoId) => {
    try {
      await axios.delete(`https://studentyt.onrender.com/api/deleteVideo/${videoId}`);
      fetchVideosByUsername(); // Fetch videos by username after deletion
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchVideosByUsername();
    } else {
      fetchVideos();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <div className="content">
      <div className={`floating-icon chat-icon ${chatVisible ? 'active' : ''}`} onClick={() => toggleVisibility(setChatVisible)}>
        <div className="icon-container">
          <i className="fas fa-comments"></i>
        </div>
      </div>
      {chatVisible && (
        <div className="floating-content chat-content">
          <h2>Chat with ChatGPT</h2>
          <ChatGPT />
        </div>
      )}

      <div className={`floating-icon todo-icon ${todoVisible ? 'active' : ''}`} onClick={() => toggleVisibility(setTodoVisible)}>
        <div className="icon-container">
          <i className="fas fa-list"></i>
          <img src="https://tse2.mm.bing.net/th?id=OIP.vIlwIS-k6g6JeAIZnsLqvgHaHa&pid=Api&P=0&h=180.jpg" alt="Your Image" className="icon-image" />
        </div>
      </div>
      <div className={`floating-content todo-content ${todoVisible ? 'visible' : ''}`}>
        <h2>To-Do List</h2>
        <textarea
          className="todo-textarea"
          placeholder="Enter your To-Do here"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        ></textarea>
        <button className="download-button" onClick={() => downloadContent(todoContent, 'todo.txt')}>
          Download To-Do
        </button>
      </div>

      <div className={`floating-icon note-icon ${noteVisible ? 'active' : ''}`} onClick={() => toggleVisibility(setNoteVisible)}>
        <div className="icon-container">
          <i className="fas fa-sticky-note"></i>
          <img src="https://tse1.mm.bing.net/th?id=OIP.FCBOdIFj--ivJKfchYo5RAHaHa&pid=Api&P=0&h=180.jpg" alt="Your Image" className="icon-image" />
        </div>
      </div>
      <div className={`floating-content note-content ${noteVisible ? 'visible' : ''}`}>
        <h2>Note-taking</h2>
        <textarea
          className="note-textarea"
          placeholder="Take notes here"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        ></textarea>
        <button className="download-button" onClick={() => downloadContent(noteContent, 'notes.txt')}>
          Download Notes
        </button>
      </div>

      <div className={`floating-icon calculator-icon ${calculatorVisible ? 'active' : ''}`} onClick={() => toggleVisibility(setCalculatorVisible)}>
        <div className="icon-container">
          <i className="fas fa-calculator"></i>
          <img src="https://tse2.mm.bing.net/th?id=OIP.DmQynof4NCuZwwAXpG5UtwHaHa&pid=Api&P=0&h=180.jpg" alt="Calculator Icon" className="icon-image" />
        </div>
      </div>
      {calculatorVisible && (
        <div className="floating-content calculator-content visible">
          <h2>Calculator</h2>
          <Calculator />
        </div>
      )}

      <div className="input-container">
        <div>
          <input
            type="text"
            className="name-input"
            placeholder="Topic Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="video-url-input"
            placeholder="YouTube Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="username-input"
            placeholder="Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Input for username
          />
        </div>
        <button onClick={handleAddVideo}>Add Video</button>
      </div>

      <div className="video-list">
        {videos.map((video) => (
          <div key={video._id} className="video-item">
            <h3>{video.name}</h3>
            <p>Video URL: {video.videoUrl}</p>
            <p>Username: {video.username}</p>
            <button onClick={() => handleDeleteVideo(video._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
