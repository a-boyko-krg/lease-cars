import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="container">
      <div className="blog__items">
        <div className="blog__item">
          <img
            src="/images/red-rocks.jpg"
            alt="red rocks"
            className="blog__item-img"
          />
          <h2 className="blog__item-text section__subtitle">
            An easier way to buy your next Toyota
          </h2>
          <button className="blog__item-btn blue-btn">more</button>
        </div>
        <div className="blog__item">
          <img
            src="/images/dog-in-car.jpg"
            alt="dog in car"
            className="blog__item-img"
          />
          <h2 className="blog__item-title section__subtitle">
            A Guide to Road-Tripping With Pets
          </h2>
          <Link to="#" className="blog__item-btn blue-btn">
            more
          </Link>
        </div>
      </div>
     
      <Link to="#" className="blog-link black-btn">
        SHOW MORE
      </Link>
    </div>
  );
}
export default Blog;
