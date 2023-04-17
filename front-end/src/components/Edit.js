import { useState } from 'react';

const Edit = (props) => {
  const [artist, setArtist] = useState(props.record.artist);
  const [album, setAlbum] = useState(props.record.album);
  const [released, setReleased] = useState(props.record.released);
  const [image, setImage] = useState(props.record.image);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecord = { artist, album, released, image };
    props.handleEdit({ _id: props.record._id, ...updatedRecord });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Artist:
        <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
      </label>
      <label>
        Album:
        <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)} />
      </label>
      <label>
        Release date:
        <input type="date" value={released} onChange={(event) => setReleased(event.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
      </label>
      <button type="submit">Submit Edit</button>
    </form>
  );
};

export default Edit