
import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Components
import HomePage from "./Pages/Home.page";
import Play from "./Pages/Play.page";
import Movie from "./Pages/Movie.Page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;

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