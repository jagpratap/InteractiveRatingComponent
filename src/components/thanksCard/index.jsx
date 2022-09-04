import "./styles.css";

const ThanksCard = ({ rating }) => (
  <div className="card">
    <div className="card-body thanks-card-body">
      <div className="thanks-card-icon">
        <img src="./assets/images/svg/illustration-thank-you.svg" alt="thankyou_illustration" />
      </div>
      <p className="thanks-card-ratings">
        You selected
        {" "}
        {rating}
        {" "}
        out of 5
      </p>
      <h1 className="thanks-card-title">Thank you!</h1>
      <p className="thanks-card-text">
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>
    </div>
  </div>
);

export default ThanksCard;
