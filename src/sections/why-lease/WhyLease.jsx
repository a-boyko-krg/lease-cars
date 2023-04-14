function WhyLease() {
  const cards = [
    {
      image: 'why-1',
      title: 'Top Dealers',
      text: 'TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory.',
    },
    {
      image: 'why-2',
      title: 'Discounted Pricing',
      text: 'View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.',
    },
    {
      image: 'why-3',
      title: 'Lower Payments',
      text: 'Get discounted pricing when you shop for a car or truck using TrueCar and save on your lease payment.',
    },
    {
      image: 'why-4',
      title: 'Easy Upgrade',
      text: 'Easy to upgrade to the newest vehicle model every few years if you would like to be modern and comfortable',
    },
  ];
  return (
    <section className="why-lease">
      <div className="container">
        <h2 className="section__title">Why Lease with D&M?</h2>
        <ul className="why-lease__list">
          {cards.map((card, index) => (
            <li className="why-lease__item" key={index}>
              <img
                className="why-lease__item-img"
                src={`images/${card.image}.svg`}
                alt="why lease"
              />
              <h3 className="why-lease__item-title section__subtitle">
                {card.title}
              </h3>
              <p className="why-lease__item-text">{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default WhyLease;
