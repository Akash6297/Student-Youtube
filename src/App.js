import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videos, setVideos] = useState([]);

  const handleAddVideo = async () => {
    try {
      await axios.post('http://localhost:5000/api/addVideo', { name, videoUrl });
      setVideoUrl('');
      fetchVideos();
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleDeleteVideo = async (videoId) => {
    try {
      await axios.delete(`/api/deleteVideo/${videoId}`);
      fetchVideos();
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };
  

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h1>YouTube Video App</h1>
      <div className="input-container">
        <input
          type="text"
          className="name-input"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="video-url-input"
          placeholder="Enter YouTube Video URL or Playlist URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button className="add-button" onClick={handleAddVideo}>
          Add Video
        </button>
      </div>
      <div className="video-list">
        {/* {videos.map((video, index) => (
          <div key={index} className="video-card">
            <p className="video-name">{video.name}</p>
            <iframe
              title={`Video ${index + 1}`}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button className='delete-button' onClick={() => handleDeleteVideo(video._id)}>Delete</button>
          </div>
        ))} */}
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

export default App;
