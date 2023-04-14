function HowDoes() {
  return (
    <section className="how-does">
      <div className="container">
        <div className="how-does__inner">
          <h2 className="section__title">How Does Leasing Work?</h2>
          <p className="how-does__text">
            Leasing a vehicle is essentially entering into a long term rental
            agreement for that vehicle. Unlike a traditional car purchase, you
            don’t actually own the vehicle. Instead, a leasing company purchases
            the vehicle from the dealer on your behalf and then you make monthly
            payments to the leasing company for the duration of your lease. Some
            leases however, do provide the option to purchase the vehicle at the
            end of the lease.
          </p>
          <h4 className="section__subtitle how-does__subtitle">
            Similar to a short term car rental, there are rules that define:
          </h4>
          <ol className="how-does__list">
            <li className="how-does__list-item">
              <img src="/images/1.svg" alt="1" />
              <p>
                How much you can drive, stated as annual miles (excess miles are
                charged at a specified rate)
              </p>
            </li>
            <li className="how-does__list-item">
              <img src="/images/2.svg" alt="2" />
              <p>
                Types of damage that you may be liable for at the end of your
                lease
              </p>
            </li>
            <li className="how-does__list-item">
              <img src="/images/3.svg" alt="3" />
              <p>
                The procedures and costs when you return the vehicle at the end
                of your lease
              </p>
            </li>
          </ol>
          <p className="how-does__text">
            Lease contracts are a commitment and ending them early can be
            difficult and expensive so it is important to consider your
            circumstances carefully before you decide.
          </p>
        </div>
      </div>
    </section>
  );
}
export default HowDoes;
