import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function TestStar() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={7}
        handleMovieRating={setMovieRating}
      />
      <p>The movie is rated {movieRating} star</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating message={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating size={24} color="green" className="" />
    <TestStar />
  </React.StrictMode>
);
