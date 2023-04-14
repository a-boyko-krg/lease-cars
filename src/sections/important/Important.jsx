function Important() {
  const cards = [
    {
      image: 'important-1',
      text: 'Monthly payments on leases are generally 20% - 30% cheaper than loans',
    },
    {
      image: 'important-2',
      text: 'You may be eligible for a tax break if you use the leased vehicle for business purposes',
    },
    {
      image: 'important-3',
      text: 'Easy to upgrade to the newest vehicle model every few years',
    },
    {
      image: 'important-4',
      text: "There are often fees charged if you drive more than your lease's mileage allowance",
    },
  ];
  return (
    <section className="important">
      <div className="container">
        <h2 className="section__title important-title">
          Important Things to Consider
        </h2>
        <p className="important-text">
          Depending on your circumstances and what is important to you, a lease
          could be a great option for your next vehicle. Below are some
          important factors that may influence your decision.
        </p>
        <div className="important__cards">
          {cards.map((card, index) => (
            <div className="important__cards-item" key={index}>
              <img className="important__cards-img" src={`/images/${card.image}.jpg`} alt="important" />
              <p className="important_cards-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Important;
