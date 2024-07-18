/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Calculator from './Calculator';
import ChatGPT from './ChatGPT';
import '../css/main.css';
import { AuthContext } from '../AuthContext'; // Import AuthContext

const Main = () => {
  const [name, setName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videos, setVideos] = useState([]);

  const [todoVisible, setTodoVisible] = useState(false);
  const [noteVisible, setNoteVisible] = useState(false);
  const [calculatorVisible, setCalculatorVisible] = useState(false);

  const [chatVisible, setChatVisible] = useState(false);

  const { user } = useContext(AuthContext); // Get user from context

  const toggleChat = () => {
    setChatVisible(!chatVisible);
    setTodoVisible(false); 
    setNoteVisible(false); 
    setCalculatorVisible(false); // Hide other content when showing ChatGPT
  };

  const toggleTodo = () => {
    setTodoVisible(!todoVisible);
    setCalculatorVisible(false);
    setNoteVisible(false);
    setChatVisible(false);
  };

  const toggleNote = () => {
    setNoteVisible(!noteVisible);
    setCalculatorVisible(false);
    setTodoVisible(false);
    setChatVisible(false);
  };

  const toggleCalculator = () => {
    setCalculatorVisible(!calculatorVisible);
    setTodoVisible(false);
    setNoteVisible(false);
    setChatVisible(false);
  };

  // State to store the content of the To-Do and Note sections
  const [todoContent, setTodoContent] = useState('');
  const [noteContent, setNoteContent] = useState('');

  // Function to handle the download of content as a text file
  const downloadContent = (content, fileName) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    element.click();
  };

  const handleAddVideo = async () => {
    try {
      await axios.post('https://studentyt.onrender.com/api/addVideo', { name, videoUrl, username: user.username });
      setVideoUrl('');
      fetchVideos();
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`https://studentyt.onrender.com/api/videos?username=${user.username}`);
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleDeleteVideo = async (videoId) => {
    try {
      await axios.delete(`https://studentyt.onrender.com/api/deleteVideo/${videoId}`);
      fetchVideos();
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="content">
      {/* Floating ChatGPT Icon */}
      <div className={`floating-icon chat-icon ${chatVisible ? 'active' : ''}`} onClick={toggleChat}>
        <div className="icon-container">
          <i className="fas fa-list"></i>
        </div>
      </div>

      {/* ChatGPT content */}
      {chatVisible && (
        <div className="floating-content chat-content">
          <h2>Chat with ChatGPT</h2>
          <ChatGPT />
        </div>
      )}

      <div className={`floating-icon todo-icon ${todoVisible ? 'active' : ''}`} onClick={toggleTodo}>
        <div className="icon-container">
          <i className="fas fa-list"></i>
          <img src="https://tse2.mm.bing.net/th?id=OIP.vIlwIS-k6g6JeAIZnsLqvgHaHa&pid=Api&P=0&h=180.jpg" alt="Your Image" className="icon-image" />
        </div>
      </div>

      <div className={`floating-icon note-icon ${noteVisible ? 'active' : ''}`} onClick={toggleNote}>
        <div className="icon-container">
          <i className="fas fa-sticky-note"></i>
          <img src="https://tse1.mm.bing.net/th?id=OIP.FCBOdIFj--ivJKfchYo5RAHaHa&pid=Api&P=0&h=180.jpg" alt="Your Image" className="icon-image" />
        </div>
      </div>

      <div className={`floating-icon calculator-icon ${calculatorVisible ? 'active' : ''}`} onClick={toggleCalculator}>
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

      <div className={`floating-content todo-content ${todoVisible ? 'visible' : ''}`}>
        <h2>To-Do List</h2>
        <textarea
          className="todo-textarea"
          placeholder="Enter your To-Do here"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        ></textarea>
        <button
          className="download-button"
          onClick={() => downloadContent(todoContent, 'todo.txt')}
        >
          Download To-Do
        </button>
      </div>

      <div className={`floating-content note-content ${noteVisible ? 'visible' : ''}`}>
        <h2>Note-taking</h2>
        <textarea
          className="note-textarea"
          placeholder="Take notes here"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        ></textarea>
        <button
          className="download-button"
          onClick={() => downloadContent(noteContent, 'notes.txt')}
        >
          Download Notes
        </button>
      </div>

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
            placeholder="Enter YouTube Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
        <div>
          <button className="add-button" onClick={handleAddVideo}>
            Add Video
          </button>
        </div>
      </div>

      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <button
              className="delete-button"
              onClick={() => handleDeleteVideo(video._id)}
            >
              Delete
            </button>
            <iframe
              title={`Video ${index + 1}`}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="video-name">{video.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;