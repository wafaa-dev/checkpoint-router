import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./component/Style.css";
import NewMovie from "./component/newMovie";
import MovieList from "./component/MovieList";
import Search from "./component/Search";

import Trailer from "./component/Trailer";

function App() {
  const [Films, setFilms] = useState([
    {
      id: 1,
      Title: "the notebook",
      Description:
        "The story he reads follows two young lovers named Allie Hamilton and Noah Calhoun, who meet one evening at a carnival. But they are separated by Allie`s parents who disapprove of Noah`s unwealthy family, and move Allie away.",
      PosterUrl:
        "https://nicholassparks.com/wp-content/uploads/2013/07/200406-the-notebook.jpeg",
      Date: "2000",
      Rate: "5",
      Trailer: "https://www.youtube.com/embed/yDJIcYE32NU",
    },
    {
      id: 2,
      Title: "The best of me",
      Description:
        "Based on the bestselling novel by acclaimed author Nicholas Sparks, The Best of Me tells the story of Dawson and Amanda, two former high school sweethearts who find themselves reunited after 20 years apart, when they return to their small town for the funeral of a beloved friend.",
      PosterUrl:
        "https://nicholassparks.com/wp-content/uploads/2014/07/BOMPoster-680x972.jpg",
      Date: "2014",
      Rate: "4",
      Trailer: "https://www.youtube.com/embed/cQszhfoP_WI",
    },
    {
      id: 3,
      Title: "Safe heaven",
      Description:
        "A young woman with a mysterious past lands in Southport, North Carolina where her bond with a widower forces her to confront the dark secret that haunts her. When a mysterious young woman named Katie appears in the small North Carolina town of Southport, her sudden arrival raises questions about her past.",
      PosterUrl:
        "https://nicholassparks.com/wp-content/uploads/2013/07/safe-haven-movie-poster-680x972.jpg",
      Date: "2013",
      Rate: "4",
      Trailer: "https://www.youtube.com/embed/q3y8fFPPgdA",
    },
    {
      id: 4,
      Title: "A walk to remember",
      Description:
        "A Walk to Remember is the story of an only son of a wealthy family that finds true love with the most unexpected person. The daughter of a minister (Mandy Moore) meets the only son (Shane West) and the story takes us through hard times, love and bitter sweet passion.",
      PosterUrl:
        "https://nicholassparks.com/wp-content/uploads/2013/07/200201-a-walk-to-remember.jpeg",
      Date: "2002",
      Rate: "3",
      Trailer: "https://www.youtube.com/embed/R3b19svqbls",
    },
  ]);
  const [searchByName, setSearchByName] = useState("");
  const [searchByRate, setSearchByRate] = useState(1);

  const addMovie = (e, newFilm) => {
    e.preventDefault();
    setFilms([...Films, newFilm]);
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Search
                    setSearchByName={setSearchByName}
                    searchByRate={searchByRate}
                    setSearchByRate={setSearchByRate}
                  />

                  <h1> The Best Nicholas Sparks Movies, Ranked</h1>
                  <div className="myList"> </div>
                  <MovieList
                    Films={Films}
                    searchByName={searchByName}
                    searchByRate={searchByRate}
                  />
                  <NewMovie addMovie={addMovie} />
                </>
              );
            }}
          />
          {/* <Route   path='/FilmDescription/:id' 
   render= {(props)=> {
     return <FilmDescription {...props } Films={Films} />
   }}>  
    
     </Route> */}

          {/* <Route  path="/Trailer"> 
     <Trailer Films={Films}/>
       </Route> */}

          <Route
            path="/Trailer/:id/:name"
            render={(props) => {
              return <Trailer {...props} films={Films} />;
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
