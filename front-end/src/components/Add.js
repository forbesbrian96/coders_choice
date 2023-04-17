import { useState } from 'react';

const Add = ({ handleCreate }) => {
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [released, setReleased] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { artist, album, released, image };
    handleCreate(newRecord);
    setArtist('');
    setAlbum('');
    setReleased('');
    setImage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Record</h2>
      <div>
        <label>Artist:</label>
        <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)}/>
      </div>
      <div>
        <label>Album:</label>
        <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)}/>
      </div>
      <div>
        <label>Release Date:</label>
        <input type="date" value={released} onChange={(event) => setReleased(event.target.value)}/>
      </div>
      <div>
        <label>Image URL:</label>
        <input type="url" value={image} onChange={(event) => setImage(event.target.value)}/>
      </div>
      <button type="submit">Add Record</button>
    </form>
  );
};

export default Add;