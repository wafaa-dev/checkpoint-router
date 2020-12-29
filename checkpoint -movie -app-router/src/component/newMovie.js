import React ,{useState} from 'react';
import Modal from 'react-modal';
import FilmRate from './FilmRate';
import './Style.css';
Modal.setAppElement('#root');




const NewMovie=({addMovie})=> {
const [show, setShow] = useState(false) ;  
const [Title, setTitle] =useState ('');
const [Description, setDescription] =useState ('');
const [PosterUrl, setPosterUrl] =useState ('');
const [Date, setDate] =useState ('');
const [Rate, setRate] =useState ('0');

const open =()=>{
    setShow(true);
};
const close =()=>{
    setShow(false);
};
const handleSubmit=(e) => {
    let newFilm =
    {
        Title,
        PosterUrl,
        Description,
        Date,
        Rate, 
    };
    
addMovie(e,newFilm);
close(false);
setTitle ('');
setDescription('');
setPosterUrl('');
setDate('');
setRate('0');

};

 return (
          <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={open}>
          ADD
        </button>
        <Modal
          className="add-modal"
          isOpen={show}
          onRequestClose={close}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Title</label>
            <input
              type="text"
              name="name"
              value={Title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Movie Rate</label>
            <div className="rating-search">
              <FilmRate Rate={Rate} setSearchByRate={setRate} />
            </div>
           <input
              type="number"
              name="rate"
              value={Rate}
              required
              onChange={(e) => setRate(e.target.value)}
            /> 
            <label>Release Date</label>
            <input
              type="number"
              name="date"
              value={Date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Movie Poster</label>
            <input
              type="url"
              name="poster"
              value={PosterUrl}
              required
              onChange={(e) => setPosterUrl(e.target.value)}
            />
           
            <label>Movie Description</label>
            <textarea
              type="text"
              name="description"
              value={Description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={close}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default NewMovie
