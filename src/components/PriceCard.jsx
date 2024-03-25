const PriceCard = () => {
  return (
    <div id="card">
      <div id="top-section">
        <h2>Join our community</h2>
        <h4>30-day, hassle-free money back guarantee</h4>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div id="bottom-section">
        <div id="bottom-left-section">
          <h4>Monthly Subscription</h4>
          <div id="price-container">
            <div id="price">$29</div>
            <div id="price-frequency">per month</div>
          </div>
          <p>Full access for less than $1 a day</p>
          <button
            onClick={() => {
              alert("clicked");
            }}
          >
            Sign Up
          </button>
        </div>
        <div id="bottom-right-section">
          <h4>Why us</h4>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
