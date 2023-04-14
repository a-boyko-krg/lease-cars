import Blog from '@/sections/blog/Blog';
import { Link, NavLink } from 'react-router-dom';
import cars from './NewCarsList';
import { useState } from 'react';

function NewCars() {
  const [activeId, setActiveId] = useState(0);
  const onClickTab = (index) => {
    setActiveId(index);
  };

   const tabs = [
    'Car and Minivan',
    'Trucks',
    'Crossovers & SUVs',
    'Electrified',
  ];
  return (
    <main className="main">
      <div className="container">
        <section className="choose">
          <h2 className="section__title">Choose your car</h2>
          <div className="tabs">
            <div className="tabs__btn">
              {tabs.map((tab, index) => (
                <Link to="#" key={index} onClick={() => onClickTab(index)}>
                  <button
                    className={
                      activeId === index
                        ? 'tabs__btn-item active'
                        : 'tabs__btn-item'
                    }
                  >
                    {tab}
                  </button>
                </Link>
              ))}
            </div>
            <div className="tabs__content">
              {activeId === 0 && (
                <div className="tabs__content-item">
                  {cars.map((car) => (
                    <div className="card" key={car.id}>
                      <img
                        className="card__img"
                        src={`/images/cars/${car.photo}.jpg`}
                        alt={car.title}
                      />
                      <div className="card__content">
                        <h4 className="card__title section__subtitle">
                          {car.title}
                        </h4>
                        <p className="card__text">{`starting from $ ${car.starting}`}</p>
                        <p className="card__price section__subtitle">{`$ ${car.price}/mo`}</p>
                      </div>
                      <Link className="card__link" to="#">
                        see details
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              {activeId > 0 && (
                <div className="tabs__content-item">
                  {cars
                    .filter((car) => car.type === activeId)
                    .map((car) => (
                      <div className="card" key={car.id}>
                        <img
                          className="card__img"
                          src={`/images/cars/${car.photo}.jpg`}
                          alt={car.title}
                        />
                        <div className="card__content">
                          <h4 className="card__title section__subtitle">
                            {car.title}
                          </h4>
                          <p className="card__text">{`starting from $ ${car.starting}`}</p>
                          <p className="card__price section__subtitle">{`$ ${car.price}/mo`}</p>
                        </div>
                        <Link className="card__link" to="#">
                          see details
                        </Link>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <Link to="#" className="choose__cars-link black-btn">
            SHOW MORE
          </Link>
        </section>
      </div>
      <Blog />
    </main>
  );
}
export default NewCars;
