import React from "react";
import FilmRate from './FilmRate';
import './Style.css';


const Search =({setSearchByName , searchByRate , setSearchByRate}) => {
 
  return (
    <div>
    <div className="search"> 
    <input 
    type="text" 
    placeholder="type movie to find ..." 
     onChange ={(e)=> setSearchByName(e.target.value)}
     />

    <div  className="rate-search">
<FilmRate Rate={searchByRate} setSearchByRate={setSearchByRate} />
    </div>
    </div>
     </div>
  );
};
export default Search;
