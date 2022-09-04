import "./styles.css";

const ratings = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];

const RatingCard = ({ rating, onSetRating, onSubmit }) => (
  <div className="card">
    <div className="card-body">
      <div className="rating-card-icon">
        <img src="./assets/images/svg/icon-star.svg" alt="star_icon" />
      </div>
      <h1 className="rating-card-title">How did we do?</h1>
      <p className="rating-card-text">
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </p>
      <div className="rating-card-ratings">
        {ratings.map(({ value }) => (
          <button
            key={value}
            type="button"
            className={value <= rating ? "active" : null}
            onClick={() => onSetRating(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="rating-card-submit-button"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  </div>
);

export default RatingCard;
