import { StrictMode, useState } from "react";

import "./App.css";

import RatingCard from "./components/ratingCard";
import ThanksCard from "./components/thanksCard";

const App = () => {
  const [rating, setRating] = useState(0);
  const [isActive, setActive] = useState(true);
  const onSetRating = (ratingValue) => {
    setRating(ratingValue);
  };
  const onSubmit = () => {
    if (rating > 0) setActive(false);
  };
  return (
    <StrictMode>
      <main className="main">
        {isActive ? (
          <RatingCard
            rating={rating}
            onSetRating={onSetRating}
            onSubmit={onSubmit}
          />
        ) : (
          <ThanksCard rating={rating} />
        )}
      </main>
    </StrictMode>
  );
};

export default App;
