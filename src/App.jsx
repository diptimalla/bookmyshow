import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Components
import HomePage from "./Pages/Home.page";
import Play from "./Pages/Play.page";
import Movie from "./Pages/Movie.Page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie}/>
      <DefaultHOC path="/plays" exact component={Play}/>
    </>
  );
}

export default App;